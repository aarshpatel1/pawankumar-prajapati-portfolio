import { DUMMY_WORKS } from '../data/works';
import type { PortfolioWork } from '../types/work';

const STORAGE_KEY = 'pawankumar_prajapati_portfolio_works_v1';

export function loadStoredWorks(): PortfolioWork[] {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return DUMMY_WORKS;
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed) || parsed.length === 0) return DUMMY_WORKS;
    return parsed as PortfolioWork[];
  } catch {
    return DUMMY_WORKS;
  }
}

export function saveStoredWorks(works: PortfolioWork[]): boolean {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(works));
    return true;
  } catch {
    return false;
  }
}

export function resetStoredWorks(): PortfolioWork[] {
  try {
    window.localStorage.removeItem(STORAGE_KEY);
  } catch {
    // Ignore storage errors in restricted contexts
  }
  return DUMMY_WORKS;
}

/**
 * Compresses and resizes user-uploaded images before saving in localStorage
 * so multiple project artworks can be stored comfortably offline in browser storage.
 */
export function compressImageFile(file: File, maxDimension = 1200): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(new Error('Could not read the selected image file.'));
    reader.onload = () => {
      const result = typeof reader.result === 'string' ? reader.result : '';
      if (!result) {
        reject(new Error('Empty image data.'));
        return;
      }

      if (file.type === 'image/svg+xml') {
        resolve(result);
        return;
      }

      const img = new Image();
      img.onerror = () => reject(new Error('Could not decode the selected image.'));
      img.onload = () => {
        const { width, height } = img;
        const scale = Math.min(1, maxDimension / Math.max(width, height));
        const targetW = Math.max(1, Math.round(width * scale));
        const targetH = Math.max(1, Math.round(height * scale));

        const canvas = document.createElement('canvas');
        canvas.width = targetW;
        canvas.height = targetH;
        const ctx = canvas.getContext('2d');
        if (!ctx) {
          resolve(result);
          return;
        }
        ctx.drawImage(img, 0, 0, targetW, targetH);
        const outputType = file.type === 'image/png' ? 'image/webp' : 'image/jpeg';
        resolve(canvas.toDataURL(outputType, 0.86));
      };
      img.src = result;
    };
    reader.readAsDataURL(file);
  });
}

export function formatWorksAsJsonDownload(works: PortfolioWork[]): void {
  const blob = new Blob([JSON.stringify(works, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = 'pawankumar-prajapati-works.json';
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  URL.revokeObjectURL(url);
}
