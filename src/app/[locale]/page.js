import { useTranslations } from 'next-intl';
import AffiliatedForm from './components/MainForm';
export default function HomePage() {
  const t = useTranslations('HomePage');
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col items-center justify-center px-4 text-center">
      <AffiliatedForm

      />
    </div>
  );
}
