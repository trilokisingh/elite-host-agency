import React, { useEffect, useRef, useState } from 'react';

import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from 'react-router-dom';

import {
  motion,
  AnimatePresence
} from 'framer-motion';

/* HOST IMAGES */

import lovepreet from './assets/lovepreet.jpeg';
import nitya from './assets/Nitya.jpeg';
import payal from './assets/payal.jpeg';
import preet from './assets/preet.jpeg';
import logo from './assets/logo.png';
import mega from './assets/mega.png';
import event from './assets/event.png';
import trofy from './assets/trofy.png';
import Highlight from './assets/Highlight.png';

/* =========================================
   HOME PAGE
========================================= */

function Home() {

  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  const [theme, setTheme] =
    useState('cyber');

  const [mobileMenu, setMobileMenu] =
    useState(false);

  const [currentEvent, setCurrentEvent] =
    useState(0);

  /* EVENTS */

  const allEvents = [
    {
      title1: 'The Sabhyata',
      title2: 'Trophy 2',
      description: 
      'The premium tournament for Live Hosts. Compete in Host v/s Host challenges to win cash prizes and Sabhyata Live T-Shirts.',
      button: 'Start Challenge',
      image: 
      trofy // Placeholder
    },

    {
      title1: 'Mega Bonus',
      title2: 'Exclusive Rewards',
      description: 
      'Special rewards for supporters! Participate from 1 May to 31 May and claim your exclusive bonuses.',
      button: 'Claim Rewards',
      image: 
      mega // Placeholder
    },

    {
      title1: 'Star Talent',
      title2: 'Fight',
      description: 
      'The ultimate showcase for singers and dancers. Show your talent and battle it out for the top spot.',
      button: 'Join Fight',
      image: 
      event // Placeholder
    },

    {
      title1: 'Highlight Mania',
      title2: '& Rewards',
      description: 
      'Open to all platform users! Claim free coins and participate in the mania throughout the month of May.',
      button: 'Get Free Coins',
      image: 
      Highlight // Placeholder
    }
];

  /* AUTO EVENT CHANGE */

  useEffect(() => {

    const interval = setInterval(() => {

      setCurrentEvent((prev) =>

        prev === allEvents.length - 1
          ? 0
          : prev + 1

      );

    }, 4000);

    return () => clearInterval(interval);

  }, [allEvents.length]);

  /* THEME SWITCH */

  const toggleTheme = () => {

    setTheme(
      theme === 'cyber'
        ? 'space'
        : 'cyber'
    );

  };

  /* PARTICLES */

  useEffect(() => {

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    let particles = [];

    const resizeCanvas = () => {

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

    };

    resizeCanvas();

    const particleCount =
      window.innerWidth < 768
        ? 50
        : 120;

    for (let i = 0; i < particleCount; i++) {

      particles.push({

        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.7,
        speedY: (Math.random() - 0.5) * 0.7,

      });

    }

    const animate = () => {

      ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
      );

      particles.forEach((p) => {

        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x > canvas.width) p.x = 0;
        if (p.x < 0) p.x = canvas.width;
        if (p.y > canvas.height) p.y = 0;
        if (p.y < 0) p.y = canvas.height;

        ctx.beginPath();

        ctx.arc(
          p.x,
          p.y,
          p.size,
          0,
          Math.PI * 2
        );

        ctx.fillStyle =
          theme === 'cyber'
            ? 'rgba(255,255,255,0.7)'
            : 'rgba(0,255,255,0.7)';

        ctx.fill();

      });

      animationRef.current =
        requestAnimationFrame(animate);

    };

    animate();

    window.addEventListener(
      'resize',
      resizeCanvas
    );

    return () => {

      cancelAnimationFrame(
        animationRef.current
      );

      window.removeEventListener(
        'resize',
        resizeCanvas
      );

    };

  }, [theme]);

  /* HOSTS */

  const hosts = [

    {
      image: lovepreet,
      name:'Lovepreet',
      role:'Top Sabhyata Live Host'
    },

    {
      image: nitya,
      name:'Nitya',
      role:'Elite Streaming Host'
    },

    {
      image: payal,
      name:'Payal',
      role:'Entertainment Creator'
    },

    {
      image: preet,
      name:'Preet',
      role:'Verified Agency Host'
    }

  ];

  return (

    <>
      <style>{`
      

        *{
          margin:0;
          padding:0;
          box-sizing:border-box;
          scroll-behavior:smooth;
        }
.logo{
  font-size:28px;
  font-weight:900;
  letter-spacing:3px;
  text-transform:uppercase;

  background: linear-gradient(
    90deg,
    #00f5ff,
    #ff4fd8,
    #8b5cf6
  );

  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;

  /* glow effect */
  filter: drop-shadow(0 0 10px rgba(0,245,255,0.6));

  /* animation */
  animation: textGlow 2s infinite ease-in-out;
}

/* animation */
@keyframes textGlow{
  0%{
    transform: scale(1);
    filter: drop-shadow(0 0 8px #00f5ff);
  }

  50%{
    transform: scale(1.05);
    filter: drop-shadow(0 0 20px #ff4fd8);
  }

  100%{
    transform: scale(1);
    filter: drop-shadow(0 0 8px #00f5ff);
  }
}

        body{
          font-family:'Poppins',sans-serif;
          overflow-x:hidden;
          background:black;
        }

        .main{
          position:relative;
          min-height:100vh;
          overflow:hidden;
          transition:1s;
        }

        .main.cyber{
          background:
          radial-gradient(circle at top,#1f1147,#050816 60%);
        }

        .main.space{
          background:
          linear-gradient(
            135deg,
            #020024,
            #090979,
            #00d4ff
          );
        }

        canvas{
          position:absolute;
          inset:0;
          width:100%;
          height:100%;
          z-index:1;
        }

        .navbar{
          position:relative;
          z-index:100;
          display:flex;
          justify-content:space-between;
          align-items:center;
          padding:25px 8%;
        }

        .logo{
          color:white;
          font-size:32px;
          font-weight:700;
        }

        .menu-btn{
          display:none;
          color:white;
          font-size:35px;
          cursor:pointer;
        }

        .nav-links{
          display:flex;
          gap:20px;
          align-items:center;
        }

        .nav-links a{
          color:white;
          text-decoration:none;
        }

        .theme-btn{
          padding:12px 18px;
          border:none;
          border-radius:12px;
          cursor:pointer;
          background:
          linear-gradient(
            90deg,
            #00f5ff,
            #8b5cf6
          );
          color:white;
          font-weight:600;
        }

        /* HERO */

        .hero{
          position:relative;
          z-index:10;
          min-height:90vh;
          display:flex;
          align-items:center;
          justify-content:space-between;
          gap:70px;
          padding:0 8%;
          flex-wrap:wrap;
        }

        .hero-left{
          flex:1;
          min-width:320px;
        }

        .badge{
          display:inline-block;
          padding:12px 20px;
          border-radius:50px;
          background:rgba(255,255,255,0.08);
          color:#00f5ff;
          margin-bottom:30px;
        }

        .hero-left h1{
          font-size:80px;
          line-height:1.1;
          color:white;
          margin-bottom:25px;
        }

        .hero-left h1 span{
          background:
          linear-gradient(
            90deg,
            #ff4fd8,
            #00f5ff
          );
          -webkit-background-clip:text;
          -webkit-text-fill-color:transparent;
        }

        .hero-left p{
          color:rgba(255,255,255,0.8);
          line-height:1.9;
          font-size:18px;
          margin-bottom:40px;
        }

        .buttons{
          display:flex;
          gap:20px;
          flex-wrap:wrap;
        }

        .btn{
          padding:18px 35px;
          border:none;
          border-radius:14px;
          cursor:pointer;
          font-weight:600;
        }

        .primary{
          background:
          linear-gradient(
            90deg,
            #ff4fd8,
            #8b5cf6
          );
          color:white;
        }

        .secondary{
          background:rgba(255,255,255,0.07);
          border:1px solid rgba(255,255,255,0.1);
          color:white;
        }

        .glass-card{
          width:100%;
          max-width:450px;
          padding:40px;
          border-radius:30px;
          background:rgba(255,255,255,0.06);
          border:1px solid rgba(255,255,255,0.1);
          backdrop-filter:blur(18px);
        }

        .stats{
          display:grid;
          grid-template-columns:repeat(2,1fr);
          gap:20px;
        }

        .stat-box{
          background:rgba(255,255,255,0.05);
          padding:30px;
          border-radius:20px;
          text-align:center;
        }

        .stat-box h2{
          color:#00f5ff;
          font-size:38px;
          margin-bottom:10px;
        }

        .stat-box p{
          color:white;
        }

        /* SECTIONS */

        .title{
          text-align:center;
          margin-bottom:70px;
        }

        .title h2{
          color:white;
          font-size:55px;
        }

        .title p{
          color:rgba(255,255,255,0.7);
        }

        /* EVENTS */

        .event-section{
          padding:120px 8%;
          background:#050816;
        }

        .event-card{
          width:100%;
          max-width:950px;
          margin:auto;
          border-radius:35px;
          overflow:hidden;

          background:
          linear-gradient(
            135deg,
            rgba(255,79,216,0.25),
            rgba(139,92,246,0.2)
          );
        }

        .event-image{
          width:100%;
          height:350px;
          object-fit:cover;
        }

        .event-content{
          padding:50px;
        }

        .event-content h2{
          color:white;
          font-size:60px;
        }

        .event-content h2 span{
          display:block;
          color:#00f5ff;
        }

        .event-content p{
          color:white;
          margin:20px 0;
          line-height:1.8;
        }

        .event-btn{
          padding:18px 30px;
          border:none;
          border-radius:14px;

          background:
          linear-gradient(
            90deg,
            #ff4fd8,
            #00f5ff
          );

          color:white;
          font-weight:700;
        }

        /* WHY */

        .why-section{
          padding:120px 8%;
          background:#030712;
        }

        .why-grid{
          display:grid;
          grid-template-columns:
          repeat(auto-fit,minmax(250px,1fr));
          gap:30px;
        }

        .why-card{
          padding:40px;
          border-radius:30px;
          background:rgba(255,255,255,0.05);
        }

        .why-icon{
          font-size:50px;
          margin-bottom:20px;
        }

        .why-card h3{
          color:white;
          margin-bottom:15px;
        }

        .why-card p{
          color:rgba(255,255,255,0.7);
          line-height:1.8;
        }

        /* EARN */

        .earn-section{
          padding:120px 8%;
          background:#050816;

          display:flex;
          justify-content:space-between;
          align-items:center;
          gap:50px;
          flex-wrap:wrap;
        }

        .earn-left{
          flex:1;
          min-width:320px;
        }

        .earn-left h2{
          color:white;
          font-size:60px;
          margin-bottom:20px;
        }

        .earn-left p{
          color:rgba(255,255,255,0.7);
          margin-bottom:30px;
        }

        .earn-list{
          display:flex;
          flex-direction:column;
          gap:20px;
        }

        .earn-item{
          padding:20px;
          border-radius:20px;
          background:rgba(255,255,255,0.05);
          color:white;
        }

        .earn-card{
          width:350px;
          padding:60px;
          border-radius:35px;
          text-align:center;

          background:
          linear-gradient(
            135deg,
            rgba(255,79,216,0.2),
            rgba(0,245,255,0.2)
          );
        }

        .earn-card h1{
          font-size:70px;
          color:#00f5ff;
        }

        .earn-card p{
          color:white;
        }

        /* HOSTS */

        .host-section{
          padding:120px 0;
          background:#030712;
          overflow:hidden;
        }

        .host-slider{
          overflow:hidden;
        }

        .host-track{
          display:flex;
          gap:25px;
          width:max-content;
          animation:scroll 25s linear infinite;
        }

        .host-track:hover{
          animation-play-state:paused;
        }

        @keyframes scroll{

          from{
            transform:translateX(0);
          }

          to{
            transform:translateX(-50%);
          }

        }

        .host-card{
          min-width:260px;
          padding:30px;
          border-radius:25px;
          text-align:center;
          background:rgba(255,255,255,0.05);
        }

        .host-avatar{
          width:120px;
          height:120px;
          border-radius:50%;
          overflow:hidden;
          margin:auto;
          margin-bottom:20px;
          padding:4px;

          background:
          linear-gradient(
            45deg,
            #ff4fd8,
            #00f5ff
          );
        }

        .host-avatar img{
          width:100%;
          height:100%;
          object-fit:cover;
          border-radius:50%;
        }

        .host-card h3{
          color:white;
        }

        .host-card p{
          color:rgba(255,255,255,0.7);
        }

        /* TESTIMONIAL */

        .testimonial-section{
          padding:120px 8%;
          background:#050816;
        }

        .testimonial-grid{
          display:grid;
          grid-template-columns:
          repeat(auto-fit,minmax(280px,1fr));
          gap:30px;
        }

        .testimonial-card{
          padding:40px;
          border-radius:30px;
          background:rgba(255,255,255,0.05);
        }

        .testimonial-card h3{
          color:#00f5ff;
          margin-bottom:20px;
        }

        .testimonial-card p{
          color:white;
          line-height:1.9;
        }

        /* OWNER */

        .owner-section{
          padding:120px 8%;
          background:#030712;
        }

        .owner-box{
          padding:60px;
          border-radius:30px;
          text-align:center;
          background:rgba(255,255,255,0.05);
        }

        .owner-box h2{
          color:white;
          font-size:55px;
        }

        .owner-box h3{
          color:#00f5ff;
          margin:20px 0;
          font-size:38px;
        }

        .owner-box p{
          color:white;
          line-height:1.9;
        }

        .platforms{
          display:flex;
          gap:20px;
          justify-content:center;
          flex-wrap:wrap;
          margin-top:30px;
        }

        .platform{
          padding:15px 25px;
          border-radius:50px;
          background:rgba(255,255,255,0.06);
          color:white;
        }

        /* JOIN */

        .join-section{
          padding:120px 8%;
          background:#050816;
        }

        .join-box{
          max-width:900px;
          margin:auto;
          padding:80px 50px;
          border-radius:40px;
          text-align:center;

          background:
          linear-gradient(
            135deg,
            rgba(255,79,216,0.15),
            rgba(0,245,255,0.15)
          );
        }

        .join-box h2{
          color:white;
          font-size:60px;
          margin-bottom:20px;
        }

        .join-box p{
          color:rgba(255,255,255,0.8);
          margin-bottom:40px;
        }

        .join-btn{
          padding:20px 40px;
          border:none;
          border-radius:18px;
          cursor:pointer;
          font-size:18px;
          font-weight:700;
          color:white;

          background:
          linear-gradient(
            90deg,
            #25d366,
            #00ff95
          );
        }

        /* FOOTER */

        .footer{
          padding:40px;
          text-align:center;
          background:#030712;
          color:white;
        }

        /* WHATSAPP */

        .whatsapp-btn{
          position:fixed;
          right:20px;
          bottom:20px;
          width:70px;
          height:70px;
          border-radius:50%;

          display:flex;
          align-items:center;
          justify-content:center;

          font-size:34px;
          text-decoration:none;
          z-index:9999;

          background:
          linear-gradient(
            135deg,
            #25d366,
            #00ff95
          );

          box-shadow:
          0 0 25px rgba(37,211,102,0.7);
        }

        /* MOBILE */

        @media(max-width:768px){

          .navbar{
            padding:20px;
          }

          .menu-btn{
            display:block;
          }

          .nav-links{
            position:absolute;
            top:90px;
            right:20px;
            width:250px;

            flex-direction:column;
            align-items:flex-start;

            padding:25px;
            border-radius:20px;

            background:rgba(0,0,0,0.9);

            display:none;
          }

          .nav-links.active{
            display:flex;
          }

          .hero{
            padding:40px 20px 80px;
            text-align:center;
          }

          .hero-left h1{
            font-size:45px;
          }

          .stats{
            grid-template-columns:1fr;
          }

          .event-section,
          .why-section,
          .earn-section,
          .testimonial-section,
          .owner-section,
          .join-section{
            padding:70px 20px;
          }

          .event-content{
            padding:25px;
          }

          .event-content h2{
            font-size:36px;
          }

          .event-image{
            height:220px;
          }

          .title h2,
          .owner-box h2,
          .join-box h2{
            font-size:38px;
          }

          .host-card{
            min-width:200px;
          }

          .earn-card{
            width:100%;
          }

        }

      `}</style>

      <div className={`main ${theme}`}>

        <canvas ref={canvasRef}></canvas>

        {/* NAVBAR */}

        <nav className="navbar">

       <div className="logo">
  ELITE HOST AGENCY
</div>

          <div
            className="menu-btn"
            onClick={() =>
              setMobileMenu(!mobileMenu)
            }
          >
            ☰
          </div>

          <div
            className={`nav-links ${
              mobileMenu ? 'active' : ''
            }`}
          >

            <a href="#">
              Home
            </a>

            <a href="#">
              Events
            </a>

            <a href="#">
              Hosts
            </a>

            <button
              className="theme-btn"
              onClick={toggleTheme}
            >
              {
                theme === 'cyber'
                  ? '🌌 Space'
                  : '⚡ Cyber'
              }
            </button>

          </div>

        </nav>

        {/* HERO */}

        <section className="hero">

          <motion.div
            className="hero-left"
            initial={{
              opacity:0,
              x:-100
            }}
            animate={{
              opacity:1,
              x:0
            }}
          >

            <div className="badge">
             🚀 India Ki Fastest Growing Live Streaming Agency
            </div>

            <h1>
              Become A Star
              <span>  Creator ✨</span>
            </h1>

            <p>
              Elite Host Agency ke saath apni live streaming journey ko next level par le jao.
Yahan creators ko milta hai high earnings, trending support, premium events aur powerful audience growth.
            </p>
<div className="buttons">

  <button
    className="btn primary"
    onClick={() =>
      window.open("https://forms.gle/gbpk4JmErtAQKtuq8", "_blank")
    }
  >
    Join Agency
  </button>

  <button className="btn secondary">
    Explore More
  </button>

</div>

          </motion.div>

          <div className="glass-card">

            <div className="stats">

              <div className="stat-box">
                <h2>100+</h2>
                <p>Active Hosts</p>
              </div>

              <div className="stat-box">
                <h2>10M+</h2>
                <p>Monthly Coins</p>
              </div>

              <div className="stat-box">
                <h2>24/7</h2>
                <p>Support</p>
              </div>

              <div className="stat-box">
                <h2>100%</h2>
                <p>Trusted</p>
              </div>

            </div>

          </div>

        </section>

      </div>

      {/* EVENTS */}

      <section className="event-section">

        <div className="title">

          <h2>
           🌌 Agency Mega Events
          </h2>

          <p>
            Trending live events join karo aur exciting rewards jeeto.
          </p>

        </div>

        <AnimatePresence mode="wait">

          <motion.div
            key={currentEvent}
            className="event-card"
            initial={{
              opacity:0,
              scale:0.8
            }}
            animate={{
              opacity:1,
              scale:1
            }}
            exit={{
              opacity:0,
              scale:0.8
            }}
          >

            <img
              className="event-image"
              src={
                allEvents[currentEvent]?.image
              }
              alt=""
            />

            <div className="event-content">

              <h2>

                {
                  allEvents[currentEvent]
                  ?.title1
                }

                <span>

                  {
                    allEvents[currentEvent]
                    ?.title2
                  }

                </span>

              </h2>

              <p>

                {
                  allEvents[currentEvent]
                  ?.description
                }

              </p>

              <button className="event-btn">

                {
                  allEvents[currentEvent]
                  ?.button
                }

              </button>

            </div>

          </motion.div>

        </AnimatePresence>

      </section>

      {/* WHY */}

      <section className="why-section">

        <div className="title">

          <h2>
            💖 Hosts Humari Agency Kyun Join Karte Hain?
          </h2>

          <p>
            💰 High Earnings
Gifts, PK battles aur premium bonuses se strong income build karo.
          </p>

        </div>

        <div className="why-grid">

          <motion.div
            className="why-card"
            whileHover={{
              y:-10
            }}
          >

            <div className="why-icon">
              💰
            </div>

            <h3>
              High Earnings
            </h3>

            <p>
              Gifts, PK battles aur premium bonuses se strong income build karo.
            </p>

          </motion.div>

          <motion.div
            className="why-card"
            whileHover={{
              y:-10
            }}
          >

            <div className="why-icon">
              🚀
            </div>

            <h3>
              Fast Growth
            </h3>

            <p>
             Trending support aur audience boost ke saath jaldi famous bano.
            </p>

          </motion.div>

          <motion.div
            className="why-card"
            whileHover={{
              y:-10
            }}
          >

            <div className="why-icon">
              🏆
            </div>

            <h3>
              Weekly Competitions
            </h3>

            <p>
              Har week ranking battles aur mega campaigns ka chance.
            </p>

          </motion.div>

          <motion.div
            className="why-card"
            whileHover={{
              y:-10
            }}
          >

            <div className="why-icon">
              🎧
            </div>

            <h3>
              24/7 Support
            </h3>

            <p>
              Dedicated teams hamesha aapki help ke liye available.
            </p>

          </motion.div>

        </div>

      </section>

      {/* EARN */}

      <section className="earn-section">

        <div className="earn-left">

          <h2>
            Earn From Live Streaming
          </h2>

          <p>
            Top hosts earn from:
          </p>

          <div className="earn-list">

            <div className="earn-item">
              🎁 Audience Gifts
            </div>

            <div className="earn-item">
              🏆 Weekly Bonuses
            </div>

            <div className="earn-item">
              💎 VIP Battles
            </div>

            <div className="earn-item">
              🔥 Event Rewards
            </div>

          </div>

        </div>

        <motion.div
          className="earn-card"
          animate={{
            y:[0,-10,0]
          }}
          transition={{
            repeat:Infinity,
            duration:3
          }}
        >

          <h1>
            ₹50K+
          </h1>

          <p>
            Top Monthly Host Earnings
          </p>

        </motion.div>

      </section>

      {/* HOSTS */}

      <section className="host-section">

        <div className="title">

          <h2>
            Top Performing Hosts
          </h2>

          <p>
            Elite creators under our agency.
          </p>

        </div>

        <div className="host-slider">

          <div className="host-track">

            {[...hosts, ...hosts].map(
              (host, index) => (

              <motion.div
                className="host-card"
                key={index}
                whileHover={{
                  scale:1.05
                }}
              >

                <div className="host-avatar">

                  <img
                    src={host.image}
                    alt={host.name}
                  />

                </div>

                <h3>
                  {host.name}
                </h3>

                <p>
                  {host.role}
                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* TESTIMONIAL */}

      <section className="testimonial-section">

        <div className="title">

          <h2>
            Host Success Stories
          </h2>

          <p>
            Real creators growing with us.
          </p>

        </div>

        <div className="testimonial-grid">

          <div className="testimonial-card">

            <h3>
              ⭐ Lovepreet
            </h3>

            <p>
              “Elite Host Agency join karne ke baad meri audience aur earning dono fast grow hui.”
            </p>

          </div>

          <div className="testimonial-card">

            <h3>
              🚀 Nitya
            </h3>

            <p>
              “Agency support ne mujhe trending creator banne me help ki.”
            </p>

          </div>

          <div className="testimonial-card">

            <h3>
              🔥 Payal
            </h3>

            <p>
             “Daily PK support aur events ne meri streaming career ko boost kiya.”
            </p>

          </div>

        </div>

      </section>

      {/* OWNER */}

      <section className="owner-section">

        <div className="owner-box">

          <h2>
            Meet The Owner
          </h2>

          <h3>
            Triloki Singh
          </h3>

          <p>
            Founder & Owner of Elite Host Agency.
            Helping creators grow faster on
            live streaming platforms.
          </p>

          <div className="platforms">

            <div className="platform">
              SABHYATA LIVE
            </div>

            <div className="platform">
              POPO LIVE
            </div>

            <div className="platform">
              Entertainment Creators
            </div>

          </div>

        </div>

      </section>

      {/* JOIN */}

      <section className="join-section">

        <motion.div
          className="join-box"
          animate={{
            boxShadow:[
              '0 0 20px #8b5cf6',
              '0 0 60px #00f5ff',
              '0 0 20px #8b5cf6'
            ]
          }}
          transition={{
            repeat:Infinity,
            duration:3
          }}
        >

          <h2>
            Ready To Become A Star Host?
          </h2>

          <p>
           Aaj hi Elite Host Agency join karo aur apni streaming journey start karo.
          </p>

          <a
            href="https://wa.me/918127684263"
            target="_blank"
            rel="noreferrer"
          >

            <button className="join-btn">
              Join On WhatsApp
            </button>

          </a>

        </motion.div>

      </section>

      {/* WHATSAPP */}

      <a
        href="https://wa.me/918127684263"
        target="_blank"
        rel="noreferrer"
        className="whatsapp-btn"
      >
        💬
      </a>

      {/* FOOTER */}

      <footer className="footer">
        © 2026 Elite Host Agency
      </footer>

    </>

  );

}

/* =========================================
   APP
========================================= */

export default function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

      </Routes>

    </BrowserRouter>

  );

}