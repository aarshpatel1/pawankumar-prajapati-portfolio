import { useEffect, useState } from 'react';
import { DUMMY_WORKS } from './data/works';
import type { PortfolioWork } from './types/work';
import {
  formatWorksAsJsonDownload,
  loadStoredWorks,
  resetStoredWorks,
  saveStoredWorks,
} from './utils/workStorage';
import { NavigationOverlay } from './components/NavigationOverlay';
import { SectionProgressRail } from './components/SectionProgressRail';
import { HeroSection } from './components/HeroSection';
import { PortfolioSection } from './components/PortfolioSection';
import { ExperienceSection } from './components/ExperienceSection';
import { PrinciplesSection } from './components/PrinciplesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { WorkDetailModal } from './components/WorkDetailModal';
import { AddWorkModal } from './components/AddWorkModal';

export function App() {
  const [works, setWorks] = useState<PortfolioWork[]>(() => loadStoredWorks());
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedWork, setSelectedWork] = useState<PortfolioWork | null>(null);
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [editingWork, setEditingWork] = useState<PortfolioWork | null>(null);
  const [prefillImageUrl, setPrefillImageUrl] = useState<string>('');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const hasCustomEdits = JSON.stringify(works) !== JSON.stringify(DUMMY_WORKS);

  useEffect(() => {
    if (!toastMessage) return;
    const timer = window.setTimeout(() => setToastMessage(null), 3200);
    return () => window.clearTimeout(timer);
  }, [toastMessage]);

  const showToast = (msg: string) => setToastMessage(msg);

  const handleOpenAddNew = (droppedImageUrl?: string) => {
    setEditingWork(null);
    setPrefillImageUrl(typeof droppedImageUrl === 'string' ? droppedImageUrl : '');
    setAddModalOpen(true);
  };

  const handleOpenEdit = (work: PortfolioWork) => {
    setEditingWork(work);
    setPrefillImageUrl('');
    setAddModalOpen(true);
  };

  const handleSaveWork = (saved: PortfolioWork, isEdit: boolean) => {
    const nextWorks = isEdit
      ? works.map((item) => (item.id === saved.id ? saved : item))
      : [...works, saved];

    setWorks(nextWorks);
    const ok = saveStoredWorks(nextWorks);
    showToast(
      ok
        ? isEdit
          ? `Updated "${saved.title}" in the portfolio.`
          : `Added "${saved.title}" to the portfolio.`
        : 'Saved for this session (browser storage quota full).'
    );
  };

  const handleDeleteWork = (workId: string) => {
    const target = works.find((w) => w.id === workId);
    const nextWorks = works.filter((w) => w.id !== workId);
    setWorks(nextWorks);
    saveStoredWorks(nextWorks);
    if (target) {
      showToast(`Removed "${target.title}".`);
    }
  };

  const handleResetDefaults = () => {
    const restored = resetStoredWorks();
    setWorks(restored);
    showToast('Restored initial placeholder works.');
  };

  const selectedIndexNumber = selectedWork
    ? String(works.findIndex((w) => w.id === selectedWork.id) + 1).padStart(2, '0')
    : '01';

  return (
    /* Equal-gap Dusty-Sky Outer Frame across all viewports (top, bottom, left, right match) */
    <div className="min-h-screen bg-dusty-sky p-2 sm:p-3.5 md:p-4 text-black">
      <div className="relative w-full overflow-hidden rounded-[22px] bg-warm-paper sm:rounded-[30px]">
        <NavigationOverlay
          isOpen={menuOpen}
          onToggle={() => setMenuOpen((prev) => !prev)}
          onClose={() => setMenuOpen(false)}
          onOpenAddWork={() => handleOpenAddNew()}
        />

        <SectionProgressRail />

        <main>
          <HeroSection onOpenAddWork={() => handleOpenAddNew()} />

          <PortfolioSection
            works={works}
            hasCustomEdits={hasCustomEdits}
            onSelectWork={setSelectedWork}
            onEditWork={handleOpenEdit}
            onOpenAddWork={handleOpenAddNew}
            onExportJson={() => formatWorksAsJsonDownload(works)}
            onResetDefaults={handleResetDefaults}
          />

          <ExperienceSection onOpenAddWork={() => handleOpenAddNew()} />

          <PrinciplesSection onOpenAddWork={() => handleOpenAddNew()} />

          <ContactSection />
        </main>

        <Footer onOpenAddWork={() => handleOpenAddNew()} />
      </div>

      <WorkDetailModal
        work={selectedWork}
        indexNumber={selectedIndexNumber}
        onClose={() => setSelectedWork(null)}
        onEdit={handleOpenEdit}
        onDelete={handleDeleteWork}
      />

      <AddWorkModal
        isOpen={addModalOpen}
        editingWork={editingWork}
        prefillImageUrl={prefillImageUrl}
        allWorks={works}
        onClose={() => {
          setAddModalOpen(false);
          setEditingWork(null);
          setPrefillImageUrl('');
        }}
        onSave={handleSaveWork}
        onExportJson={() => formatWorksAsJsonDownload(works)}
      />

      {toastMessage && (
        <div
          role="status"
          aria-live="polite"
          className="sketch-card animate-modal-enter fixed right-6 bottom-6 z-50 px-6 py-3.5 font-ui text-[14px] text-black"
        >
          {toastMessage}
        </div>
      )}
    </div>
  );
}

export default App;
