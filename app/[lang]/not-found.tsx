import { ICONS } from '@/lib/metaIcons';

export const metadata = {
  title: 'La Kirghize',
  icons: ICONS,
};

function NotFound() {
  return (
    <div className="pt-40 px-4">
      <p className="text-7xl">Oops!</p>
      <h1 className="text-4xl md:text-6xl">Page not found</h1>
    </div>
  );
}

export default NotFound;
