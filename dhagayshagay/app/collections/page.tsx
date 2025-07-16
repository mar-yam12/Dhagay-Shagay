// app/collections/page.tsx
import { redirect } from 'next/navigation';

export default function CollectionsRedirect() {
  redirect('/collections/all');
}
