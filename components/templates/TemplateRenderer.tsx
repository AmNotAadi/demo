import { memo } from 'react'
import { TemplateData } from './GymTemplate'
import { GymTemplate } from './GymTemplate'
import { RestaurantTemplate } from './RestaurantTemplate'
import { CafeTemplate } from './CafeTemplate'
import { JewelryTemplate } from './JewelryTemplate'
import { SalonTemplate } from './SalonTemplate'

function TemplateRendererComponent({ data }: { data: TemplateData }) {
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

// Memoize to prevent unnecessary re-renders
export const TemplateRenderer = memo(TemplateRendererComponent, (prevProps, nextProps) => {
  // Deep comparison of data object
  return JSON.stringify(prevProps.data) === JSON.stringify(nextProps.data)
})
