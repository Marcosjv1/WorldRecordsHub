function AthleteCard({ athlete }) {
  return (
    <div className="athlete-card">
      <div className="athlete-card-img-wrapper">
        <img
          src={athlete.image}
          alt={athlete.name}
          className="athlete-card-img"
          loading="lazy"
          onError={(e) => {
            e.target.src =
              'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80'
          }}
        />
      </div>

      <div className="athlete-card-body">
        <h3 className="athlete-card-name">{athlete.name}</h3>
      </div>
    </div>
  )
}

export default AthleteCard
