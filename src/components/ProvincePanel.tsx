import { PROVINCES, REGIONS } from '../data/provinces'
import { PRODUCTS } from '../data/products'
import './ProvincePanel.css'

interface ProvincePanelProps {
  selectedKey: string | null
  onViewProducts: (key: string) => void
}

export default function ProvincePanel({ selectedKey, onViewProducts }: ProvincePanelProps) {
  if (!selectedKey || !PROVINCES[selectedKey]) {
    return (
      <div className="ppanel ppanel--empty">
        <div className="ppanel__emptyicon">🗺️</div>
        <h3>Khám phá nông sản theo vùng miền</h3>
        <p>
          Rê chuột lên bản đồ để xem gợi ý nông sản đặc trưng của từng tỉnh,
          và bấm chọn một tỉnh để xem chi tiết và đặt mua.
        </p>
      </div>
    )
  }

  const province = PROVINCES[selectedKey]
  const region = REGIONS[province.region]
  const productCount = PRODUCTS.filter((p) => p.provinceKey === selectedKey).length

  return (
    <div className="ppanel">
      <span className="ppanel__region" style={{ background: region?.color }}>
        {region?.name}
      </span>
      <h3 className="ppanel__name">{province.name}</h3>
      <p className="ppanel__label">Nông sản đặc trưng</p>
      <div className="ppanel__chips">
        {province.nongsan.map((n) => (
          <span key={n} className="ppanel__chip">🌱 {n}</span>
        ))}
      </div>
      <button className="ppanel__cta" onClick={() => onViewProducts(selectedKey)}>
        {productCount > 0
          ? `Xem ${productCount} sản phẩm đang bán →`
          : 'Xem gian hàng nông sản →'}
      </button>
    </div>
  )
}
