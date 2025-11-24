import Link from 'next/link';
import { FaChevronRight, FaHome } from 'react-icons/fa';

interface BreadcrumbItem {
  label: string;
  href?: string; // Optional - last item (current page) doesn't need href
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="bg-white-off py-4 border-b">
      <div className="container mx-auto px-4">
        <ol className="flex items-center gap-2 text-sm text-text-light whitespace-nowrap overflow-hidden">
          <li>
            <Link href="/" className="hover:text-primary transition-colors">
              <FaHome />
            </Link>
          </li>
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              <FaChevronRight className="text-xs" />
              {item.href ? (
                <Link
                  href={item.href}
                  className="hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-text-dark font-medium">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}

