import React, { useEffect, useRef, useState } from 'react';
import { WORK_CATEGORIES, type PortfolioWork, type WorkCategory } from '../types/work';
import { compressImageFile } from '../utils/workStorage';

interface AddWorkModalProps {
  isOpen: boolean;
  editingWork: PortfolioWork | null;
  prefillImageUrl?: string;
  allWorks: PortfolioWork[];
  onClose: () => void;
  onSave: (work: PortfolioWork, isEdit: boolean) => void;
  onExportJson: () => void;
}

const FALLBACK_IMAGE = '/images/work-01-kaveri.jpg';

export const AddWorkModal: React.FC<AddWorkModalProps> = ({
  isOpen,
  editingWork,
  prefillImageUrl,
  allWorks,
  onClose,
  onSave,
  onExportJson,
}) => {
  const fileRef = useRef<HTMLInputElement | null>(null);
  const [title, setTitle] = useState('');
  const [italicWord, setItalicWord] = useState('');
  const [category, setCategory] = useState<WorkCategory>('Brand Identity');
  const [client, setClient] = useState('');
  const [year, setYear] = useState('2026');
  const [role, setRole] = useState('Graphic Designer');
  const [summary, setSummary] = useState('');
  const [story, setStory] = useState('');
  const [deliverablesText, setDeliverablesText] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [externalLink, setExternalLink] = useState('');
  const [awardBadge, setAwardBadge] = useState(true);
  const [awardLabel, setAwardLabel] = useState('Featured Work');
  const [keepColorInPreview, setKeepColorInPreview] = useState(false);
  const [uploadStatus, setUploadStatus] = useState('');
  const [showCodeHelper, setShowCodeHelper] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    if (editingWork) {
      setTitle(editingWork.title);
      setItalicWord(editingWork.italicWord || '');
      setCategory(editingWork.category);
      setClient(editingWork.client);
      setYear(editingWork.year);
      setRole(editingWork.role);
      setSummary(editingWork.summary);
      setStory(editingWork.story);
      setDeliverablesText(editingWork.deliverables.join(', '));
      setImageUrl(editingWork.imageUrl);
      setExternalLink(editingWork.externalLink || '');
      setAwardBadge(Boolean(editingWork.awardBadge));
      setAwardLabel(editingWork.awardLabel || 'Featured Work');
      setKeepColorInPreview(Boolean(editingWork.keepColorInPreview));
    } else {
      setTitle('');
      setItalicWord('');
      setCategory('Brand Identity');
      setClient('');
      setYear(String(new Date().getFullYear()));
      setRole('Graphic Designer');
      setSummary('');
      setStory('');
      setDeliverablesText('Visual Identity, Typography, Print Production');
      setImageUrl(prefillImageUrl || '');
      setExternalLink('');
      setAwardBadge(true);
      setAwardLabel('Featured Work');
      setKeepColorInPreview(false);
    }
    setUploadStatus(prefillImageUrl ? 'Loaded dropped artwork image!' : '');
    setCopied(false);
  }, [isOpen, editingWork, prefillImageUrl]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      const dataUrl = await compressImageFile(file);
      setImageUrl(dataUrl);
      setUploadStatus(`Loaded "${file.name}" for circular preview & case study.`);
    } catch {
      setUploadStatus('Could not load that image. Please try a JPG, PNG, WebP, or SVG.');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !summary.trim()) return;

    const deliverables = deliverablesText
      .split(',')
      .map((item) => item.trim())
      .filter(Boolean);

    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');

    const nextWork: PortfolioWork = {
      id: editingWork ? editingWork.id : `${slug || 'project'}-${Date.now()}`,
      title: title.trim(),
      italicWord: italicWord.trim() || undefined,
      category,
      client: client.trim() || 'Independent Client',
      year: year.trim() || '2026',
      role: role.trim() || 'Graphic Designer',
      summary: summary.trim(),
      story:
        story.trim() ||
        `${summary.trim()} Crafted by Pawankumar Prajapati with careful attention to typographic hierarchy, paper stock, and tactile print detail.`,
      deliverables: deliverables.length > 0 ? deliverables : ['Graphic Design'],
      imageUrl: imageUrl.trim() || FALLBACK_IMAGE,
      externalLink: externalLink.trim() || undefined,
      awardBadge,
      awardLabel: awardLabel.trim() || 'Featured Work',
      keepColorInPreview,
      isPlaceholder: false,
      createdAt: editingWork ? editingWork.createdAt : Date.now(),
    };

    onSave(nextWork, Boolean(editingWork));
    onClose();
  };

  const handleCopyJson = async () => {
    try {
      await navigator.clipboard.writeText(JSON.stringify(allWorks, null, 2));
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    } catch {
      onExportJson();
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={editingWork ? 'Edit portfolio work' : 'Add new graphic design work'}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-warm-paper/92 p-4 sm:p-8"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="sketch-card animate-modal-enter relative my-auto max-h-[92vh] w-full max-w-[780px] overflow-y-auto p-7 sm:p-[48px]"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-ui text-[13px] text-charcoal">
              (Folio Manager — {editingWork ? 'Edit / Replace Piece' : 'Add New Graphic Work'})
            </p>
            <h2 className="font-editorial mt-1 text-[34px] leading-[1.06] text-black sm:text-[42px]">
              {editingWork ? (
                <>
                  Update <em>{editingWork.title}</em>
                </>
              ) : (
                <>
                  Add <em>new work</em> to the folio
                </>
              )}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="flex h-[40px] w-[40px] shrink-0 cursor-pointer items-center justify-center rounded-[3000px] border-[1.5px] border-black bg-white font-ui text-[18px] leading-none text-black shadow-[4px_-4px_0px_0px_#333333] transition-transform hover:-translate-x-[1px] hover:translate-y-[1px]"
          >
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit} className="mt-7 space-y-5">
          {/* Artwork Upload + Circular Preview */}
          <div className="flex flex-col gap-5 rounded-[30px] border-[1.5px] border-dusty-sky bg-warm-paper p-5 sm:flex-row sm:items-center">
            <div className="relative h-[108px] w-[108px] shrink-0">
              <div className="h-full w-full overflow-hidden rounded-[120px] border-[1.5px] border-black bg-white">
                <img
                  src={imageUrl.trim() || FALLBACK_IMAGE}
                  alt="Artwork circular preview"
                  className={`h-full w-full object-cover ${
                    keepColorInPreview ? '' : 'sketch-photo-muted'
                  }`}
                />
              </div>
              {awardBadge && (
                <span className="absolute right-0 bottom-0 flex h-[28px] w-[28px] items-center justify-center rounded-[120px] border-[1.5px] border-black bg-white text-[13px]">
                  🏆
                </span>
              )}
            </div>

            <div className="flex-1 space-y-3">
              <div className="flex flex-wrap items-center gap-3">
                <input
                  ref={fileRef}
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
                <button
                  type="button"
                  onClick={() => fileRef.current?.click()}
                  className="pill-chip pill-chip-active"
                >
                  Upload Image File
                </button>
                <span className="font-ui text-[12px] text-charcoal">
                  or paste an image path / URL below
                </span>
              </div>

              <input
                type="text"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                placeholder="/images/my-poster.jpg or https://..."
                className="sketch-input py-2.5 text-[14px]"
              />

              {uploadStatus && (
                <p className="font-ui text-[12px] text-charcoal">{uploadStatus}</p>
              )}
            </div>
          </div>

          {/* Title & Italic Emphasis */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="work-title" className="mb-1.5 block font-ui text-[13px] text-charcoal">
                Project Title *
              </label>
              <input
                id="work-title"
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g. Narmada Craft Spirits"
                className="sketch-input"
              />
            </div>

            <div>
              <label htmlFor="work-italic" className="mb-1.5 block font-ui text-[13px] text-charcoal">
                Word to Italicize (optional)
              </label>
              <input
                id="work-italic"
                type="text"
                value={italicWord}
                onChange={(e) => setItalicWord(e.target.value)}
                placeholder="e.g. Spirits"
                className="sketch-input"
              />
            </div>
          </div>

          {/* Category Selector */}
          <div>
            <span className="mb-2 block font-ui text-[13px] text-charcoal">
              Graphic Design Discipline
            </span>
            <div className="flex flex-wrap gap-2">
              {WORK_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setCategory(cat)}
                  className={`pill-chip ${category === cat ? 'pill-chip-active' : ''}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Client, Year, Role */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div>
              <label htmlFor="work-client" className="mb-1.5 block font-ui text-[13px] text-charcoal">
                Client / Studio
              </label>
              <input
                id="work-client"
                type="text"
                value={client}
                onChange={(e) => setClient(e.target.value)}
                placeholder="e.g. Narmada Distillery"
                className="sketch-input"
              />
            </div>

            <div>
              <label htmlFor="work-year" className="mb-1.5 block font-ui text-[13px] text-charcoal">
                Year
              </label>
              <input
                id="work-year"
                type="text"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                placeholder="2026"
                className="sketch-input"
              />
            </div>

            <div>
              <label htmlFor="work-role" className="mb-1.5 block font-ui text-[13px] text-charcoal">
                Role
              </label>
              <input
                id="work-role"
                type="text"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                placeholder="Brand & Packaging Designer"
                className="sketch-input"
              />
            </div>
          </div>

          {/* Card Summary */}
          <div>
            <label htmlFor="work-summary" className="mb-1.5 block font-ui text-[13px] text-charcoal">
              Card Summary *
            </label>
            <textarea
              id="work-summary"
              required
              rows={2}
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              placeholder="1–2 crisp sentences shown directly on the showcase card..."
              className="sketch-input resize-y"
            />
          </div>

          {/* Full Case Study Story */}
          <div>
            <label htmlFor="work-story" className="mb-1.5 block font-ui text-[13px] text-charcoal">
              Full Case Study Notes
            </label>
            <textarea
              id="work-story"
              rows={3}
              value={story}
              onChange={(e) => setStory(e.target.value)}
              placeholder="Describe the brief, typographic direction, print materials, or outcome..."
              className="sketch-input resize-y"
            />
          </div>

          {/* Deliverables & External Link */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="work-deliverables"
                className="mb-1.5 block font-ui text-[13px] text-charcoal"
              >
                Deliverables (comma-separated)
              </label>
              <input
                id="work-deliverables"
                type="text"
                value={deliverablesText}
                onChange={(e) => setDeliverablesText(e.target.value)}
                placeholder="Logo, Label Design, Print Specs"
                className="sketch-input"
              />
            </div>

            <div>
              <label htmlFor="work-link" className="mb-1.5 block font-ui text-[13px] text-charcoal">
                Behance / Dribbble / Live Link
              </label>
              <input
                id="work-link"
                type="url"
                value={externalLink}
                onChange={(e) => setExternalLink(e.target.value)}
                placeholder="https://behance.net/gallery/..."
                className="sketch-input"
              />
            </div>
          </div>

          {/* Pill Toggle Controls (radius >= 20px per design rules) */}
          <div className="flex flex-wrap gap-3 pt-1">
            <button
              type="button"
              onClick={() => setAwardBadge((prev) => !prev)}
              className={`pill-chip ${awardBadge ? 'pill-chip-active' : ''}`}
            >
              <span>🏆</span>
              <span>{awardBadge ? 'Trophy badge visible' : 'No trophy badge'}</span>
            </button>

            <button
              type="button"
              onClick={() => setKeepColorInPreview((prev) => !prev)}
              className={`pill-chip ${keepColorInPreview ? 'pill-chip-active' : ''}`}
            >
              <span>
                {keepColorInPreview
                  ? 'Full-color card thumbnail'
                  : 'Muted analog card thumbnail'}
              </span>
            </button>
          </div>

          {/* Submit Row */}
          <div className="flex flex-col gap-4 pt-3 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="button"
              onClick={() => setShowCodeHelper((prev) => !prev)}
              className="coral-inline-link bg-transparent p-0 text-left font-ui text-[13px]"
            >
              {showCodeHelper
                ? 'hide permanent code guide ↑'
                : 'how to save permanently in code ↓'}
            </button>

            <div className="flex flex-wrap items-center gap-3">
              <button type="button" onClick={onClose} className="pill-chip">
                Cancel
              </button>
              <button type="submit" className="pill-cta px-8 py-3.5 text-[13px]">
                {editingWork ? 'SAVE CHANGES' : 'PUBLISH TO PORTFOLIO'}
              </button>
            </div>
          </div>
        </form>

        {/* Developer Permanent Code Export Helper */}
        {showCodeHelper && (
          <div className="mt-6 space-y-3 rounded-[24px] border-[1.5px] border-dusty-sky bg-warm-paper p-5 font-ui text-[13px] text-charcoal">
            <p className="font-medium text-black">
              (Saving your works permanently in the codebase)
            </p>
            <p>
              Entries added here are saved immediately in browser <code>localStorage</code>.
              To commit them permanently into source code, drop your artwork files in{' '}
              <code>public/images/</code> and replace <code>DUMMY_WORKS</code> inside{' '}
              <code>src/data/works.ts</code> with your exported JSON.
            </p>
            <div className="flex flex-wrap gap-3 pt-1">
              <button type="button" onClick={handleCopyJson} className="pill-chip">
                {copied ? 'Copied JSON ✓' : 'Copy Portfolio JSON'}
              </button>
              <button type="button" onClick={onExportJson} className="pill-chip">
                Download works.json
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
