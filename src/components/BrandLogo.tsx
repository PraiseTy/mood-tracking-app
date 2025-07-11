import SVGIcon from "@/components/SVGIcon";

export default function BrandLogo({className}: {className?: string})  {
return (
    <SVGIcon
        name='brand-logo'
        className={className}
        style={{width: 192, height: 40}}
        aria-hidden="false"
        aria-label="Mood Tracker"/>)
}
