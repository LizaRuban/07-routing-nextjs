import NotePreview from './NotePreview';

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function Page({ params }: Props) {
  return <NotePreview params={params} />;
}
