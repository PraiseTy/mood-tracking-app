import SVGIcon from '@/components/ui/SVGIcon';

export default function PictureAvatar({ className }: { className?: string }) {
  return <SVGIcon name="avatar-placeholder" className={className} style={{ width: 64, height: 64 }} />;
}
