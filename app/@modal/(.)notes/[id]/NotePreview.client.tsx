"use client";

import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import Modal from "../../../../components/Modal/Modal";
import { fetchNoteById, type Note } from "@/lib/api";
import styles from "./NotePreview.module.css";

interface NotePreviewProps {
  id: string;
}

export default function NotePreview({ id }: NotePreviewProps) {
  const router = useRouter();

  const {
    data: note,
    isLoading,
    isError,
  } = useQuery<Note, Error>({
    queryKey: ["note", id],
    queryFn: () => fetchNoteById(id),
  });

  return (
    <Modal onClose={() => router.back()}>
      <div className={styles.container}>
        {isLoading && <p>Loading note...</p>}
        {isError && <p>Error loading note.</p>}

        {note && (
          <div className={styles.item}>
            <button className={styles.backBtn} onClick={() => router.back()}>
              ← Back
            </button>

            <div className={styles.header}>
              <h2>{note.title}</h2>
              {note.tag && <span className={styles.tag}>{note.tag}</span>}
            </div>

            <p className={styles.content}>{note.content}</p>
            <p className={styles.date}>
              {new Date(note.createdAt).toLocaleDateString()}
            </p>
          </div>
        )}
      </div>
    </Modal>
  );
}
