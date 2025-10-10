import { TemplateData } from './GymTemplate'
import { GymTemplate } from './GymTemplate'
import { RestaurantTemplate } from './RestaurantTemplate'
import { CafeTemplate } from './CafeTemplate'
import { JewelryTemplate } from './JewelryTemplate'
import { SalonTemplate } from './SalonTemplate'

export function TemplateRenderer({ data }: { data: TemplateData }) {
  switch (data.businessType) {
    case 'gym':
      return <GymTemplate data={data} />
    case 'restaurant':
      return <RestaurantTemplate data={data} />
    case 'cafe':
      return <CafeTemplate data={data} />
    case 'jewelry':
      return <JewelryTemplate data={data} />
    case 'salon':
      return <SalonTemplate data={data} />
    default:
      return <GymTemplate data={data} />
  }
}
