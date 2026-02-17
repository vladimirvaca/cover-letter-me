import React, { useEffect, useCallback } from 'react';
import Modal from 'react-modal';

interface PdfViewerModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  pdfUrl: string;
}

const PdfViewerModal: React.FC<PdfViewerModalProps> = ({ isOpen, onRequestClose, pdfUrl }) => {
  useEffect(() => {
    Modal.setAppElement('#root');
  }, []);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onRequestClose();
    },
    [isOpen, onRequestClose]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="CV PDF Viewer"
      className="bg-background-light dark:bg-background-dark rounded-lg shadow-xl max-w-5xl w-full mx-auto my-2 sm:my-4 md:my-8 h-[95vh] flex flex-col overflow-hidden outline-none"
      overlayClassName="fixed inset-0 bg-black/70 flex items-center justify-center p-1 sm:p-2 md:p-4 z-50"
    >
      {/* Header */}
      <div className="flex items-center justify-between py-1 md:py-1.5 px-2 md:px-3 border-b border-black/10 dark:border-white/10 shrink-0">
        <h2 className="text-base md:text-lg font-bold text-black dark:text-white">Vladimir Vaca - Senior Full Stack Developer</h2>
        <div className="flex items-center gap-2">
          <button
            onClick={onRequestClose}
            className="p-1.5 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <span className="material-symbols-outlined text-black dark:text-white text-lg md:text-xl">
              close
            </span>
          </button>
        </div>
      </div>

      {/* PDF Viewer using embed tag */}
      <div className="flex-1 overflow-hidden bg-gray-100 dark:bg-surface-darker min-h-0">
        <embed
          src={`${pdfUrl}#toolbar=1&navpanes=0&scrollbar=1`}
          type="application/pdf"
          className="w-full h-full"
          title="CV PDF Viewer"
        />
      </div>
    </Modal>
  );
};

export default PdfViewerModal;
