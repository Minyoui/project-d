import React, { useState } from 'react';
import './services.css'; 

//icons
import Solo from '../../../../assets/icons/Solo.png';
import Couple from '../../../../assets/icons/Couple.png';
import Lotus from '../../../../assets/icons/Lotus.png';
import Care from '../../../../assets/icons/Care.png';
import Spa from '../../../../assets/icons/Spa.png';
import Diamond from '../../../../assets/icons/Diamond.png';

function Services () {
  const [activeCategory, setActiveCategory] = useState('wellness');

  const services = {
    wellness: [
      {
        name: "Body Scrub w/ Hotstone Massage",
        duration: "1 hour & 30 mins",
        price: "₱1250",
        description: "Relaxing full-body massage using long, flowing strokes to release tension"
      },
      {
        name: "Deep Tissue Massage",
        duration: "1 hour & 15 mins", 
        price: "₱649",
        description: "Intensive massage targeting deeper muscle layers to relieve chronic tension"
      },
      {
        name: "Kids Massage",
        duration: "30 mins",
        price: "₱249",
        description: "Therapeutic massage using heated basalt stones to melt away stress"
      },

    ],


    therapeutic: [
      {
        name: "Trigger Points",
        duration: "1 hour",
        price: "₱649",
        description: "Deep cleansing and moisturizing treatment for all skin types"
      },
      {
        name: "Trigger Point w/ Warm Comp",
        duration: "1 hour & 30 mins",
        price: "₱949",
        description: "Advanced treatment with peptides and antioxidants to reduce fine lines"
      },
      {
        name: "Pre-Natal",
        duration: "1 hour & 30 mins",
        price: "₱999",
        description: "Purifying treatment to clear blemishes and prevent breakouts"
      },
      {
        name: "Post-Natal",
        duration: "1 hour & 30 mins",
        price: "₱1299",
        description: "Customized facial treatment designed specifically for men's skin"
      }
    ],
    addon: [
      {
        name: "Ventosa",
        duration: "15 mins",
        price: "₱200",
        description: "Exfoliating treatment to remove dead skin and reveal silky smoothness"
      },
      {
        name: "Cupping",
        duration: "15 mins",
        price: "₱200",
        description: "Detoxifying wrap infused with essential oils for deep relaxation"
      },
      {
        name: "Warm Compress",
        duration: "15 mins",
        price: "₱200",
        description: "Mineral-rich mud therapy to purify and nourish the skin"
      },
      {
        name: "Ear Candle",
        duration: "15 mins",
        price: "₱200",
        description: "Natural-looking tan application for a healthy glow"
      },
      {
        name: "Hotstone",
        duration: "15 mins",
        price: "₱200",
        description: "Natural-looking tan application for a healthy glow"
      },
      {
        name: "Massage",
        duration: "30 mins",
        price: "₱300",
        description: "Natural-looking tan application for a healthy glow"
      },
      {
        name: "Hand Massage",
        duration: "30 mins",
        price: "₱300",
        description: "Natural-looking tan application for a healthy glow"
      },
      {
        name: "Foot Reflex",
        duration: "30 mins",
        price: "₱350",
        description: "Natural-looking tan application for a healthy glow"
      },
    ],
    packages: [
      {
        name: "Revive Package",
        duration: "1 hour & 30 mins",
        solo_icon: <img src={Solo}/>,
        solo_price: "₱750",
        couple_icon: <img src={Couple}/>,
        couple_price: "₱1449",
        description: "Treatment with Hot Tea and Hot Towel",
        free: "FREE",
        package: "2 ADD ONS"
      },
      {
        name: "Retreat Package",
        duration: "2 hours",
        solo_icon: <img src={Solo}/>,
        solo_price: "₱899",
        couple_icon: <img src={Couple}/>,
        couple_price: "₱1699",
        description: "Treatment with Hot Tea and Hot Towel",
        free: "FREE",
        package: "3 ADD ONS"
      },
      {
        name: "Refresh Package",
        duration: "Depends on choice",
        price: "",
        description: "Treatment with Hot Tea and Hot Towel",
        package: "1 Hour Massage + Warm Compress"
      },
    ]
  };

  const categories = [
    { id: 'wellness', name: 'Wellness Massage', icon: <img src={Lotus}/> },
    { id: 'therapeutic', name: 'Therapeutic Massage', icon: <img src={Care}/> },
    { id: 'addon', name: 'Add Ons', icon: <img src={Spa}/> },
    { id: 'packages', name: 'Packages', icon: <img src={Diamond}/> }
  ];

  return (
    <div className="spa-menu">
      {/* Header */}
      <div className="spa-header">
        <h1 className="spa-title">Services We Offer</h1>
        <div className="spa-title-divider"></div>
        <p className="spa-subtitle">
          Discover tranquility and rejuvenation with our carefully curated spa services
        </p>
      </div>

      <div className="spa-content">
        {/* Category Navigation */}
        <div className="category-navigation">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`category-button ${activeCategory === category.id ? 'active' : ''}`}
            >
              <span className="category-icon">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {services[activeCategory].map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-header">
                <h3 className="service-name">{service.name}</h3>
                <span className="service-price">
                    {service.price}
                </span>
              </div>
              
              <span>
                    <p className='package-price'>
                        <ul>
                            <li>
                                {service.solo_icon}{service.solo_price}
                            </li>
                            <li>
                                {service.couple_icon}{service.couple_price}
                            </li>
                        </ul>
                    </p>
                </span>

              <div className="service-duration">
                <span className="duration-dot"></span>
                {service.duration}
              </div>
              
              <p className="service-description">
                {service.description}
              </p>

              <span className="service-package">
                <p>
                    <span>{service.free}</span> {service.package}
                </p>
              </span>
              
              <div className="service-footer">
                <button className="book-now-button">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="spa-footer">
          <p className="footer-quote">
            "Wellness is not a destination, it's a way of life"
          </p>
          <p className="footer-note">
            All appointments include complimentary access to our relaxation lounge and refreshments
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;