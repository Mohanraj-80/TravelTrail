const Hotels = () => {
  return (
    <>
          <div className="container-fluid hotels-bg">
              <div className="row pt-5">
                  <div className="hotels-card shadow p-2">
                      <div className="d-flex flex-row justify-content-space-">
                          <img src="../src/assets/hotels-bg.jpg" width={"170"} height={"200"} className="hotel-img" />
                          <div className="ml-3">
                              <h1 className="hotel-name">Courtyard Los Angeles Torrance</h1>
                              <p className="hotel-address">No.27 Adam street,Kathryn Barger, Los Angeles</p>
                              <p>Rating: {'⭐'.repeat(4)}</p>
                              <button className="btn book-now">Book Now</button>
                          </div>
                      </div>
                  </div>
            </div>
        </div>
    </>
  )
}

export default Hotels