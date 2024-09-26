function Card({posterImg, altText}) {
  return (
    <div className="card">
      <img src={posterImg} alt={altText} />
      <p>{altText}</p>
    </div>
  )
}

export default Card