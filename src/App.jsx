import React, { useEffect, useState } from 'react'
import { ArrowRight, ArrowUpRight, ChevronDown, Compass, ExternalLink, Map, Maximize2, Monitor, Mountain, Smartphone, X } from 'lucide-react'

const PHOTO = {
  mountain: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1500&q=85',
  mountain2: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1400&q=85',
  friends: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=85',
  forest: 'https://images.unsplash.com/photo-1483664852095-d6cc6870702d?auto=format&fit=crop&w=1600&q=85',
  aurora: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=1600&q=85',
  husky: 'https://images.unsplash.com/photo-1517783999520-f068d7431a60?auto=format&fit=crop&w=1100&q=85',
}

const campaigns = [
  { title: '01 · Travel Newsletter', type: 'EDITORIAL / INSPIRATION', description: 'Reframe the wait. Introduce solo-friendly group adventure.', subject: 'Go solo. Find your people.', preheader: "The winter adventure you've been dreaming about, with good company along the way." },
  { title: '02 · Promotional Email', type: 'DESTINATION / CONSIDERATION', description: 'Make the idea tangible with four nights in Finnish Lapland.', subject: 'Your friends can come next time. Lapland is calling.', preheader: 'Four nights in Finnish Lapland, with a few new faces to share the adventure.' }
]

function Topography({className=''}) {
  return <svg className={'topography '+className} viewBox="0 0 500 400" fill="none" aria-hidden="true" preserveAspectRatio="xMidYMid slice"><path d="M-40 130C78 5 155 252 293 97S507 28 542 75M-35 155C94 25 151 270 303 118S513 53 541 98M-30 181C108 43 150 287 312 141S519 82 544 121M-24 208C121 65 153 303 321 164S519 106 546 147M-19 236C136 88 161 326 328 187S529 132 545 170M-10 265C143 115 170 340 335 215S531 160 548 195M0 293C166 139 176 357 344 241S535 189 550 222M7 322C172 167 182 368 356 267S539 217 551 249" stroke="currentColor" strokeWidth="1.5"/></svg>
}

function Image({src, alt, className='', ...props}) {
  const [failed, setFailed] = useState(false)
  return <div className={'image-wrap '+className} {...props}>{!failed ? <img src={src} alt={alt} loading="lazy" onError={() => setFailed(true)} /> : <div className="image-fallback" role="img" aria-label={'Image unavailable: '+alt}><Mountain size={35}/><span>Adventure awaits</span></div>}</div>
}

function Brand({small=false}) { return <div className={'brand '+(small?'brand-small':'')}><span className="brand-mark"><Mountain size={small?16:20} strokeWidth={2.5}/></span><span>much better<br/><strong>adventures.</strong></span></div> }
function EmailTop({preheader}) { return <><p className="email-preheader">{preheader}</p><header className="email-brandbar"><Brand small/><span>DO WILD THINGS <ArrowUpRight size={13}/></span></header></> }
function CTA({children, onClick, light=false}) { return <button className={'email-cta '+(light?'light':'')} onClick={() => onClick(children)}>{children}</button> }
function EmailFooter({links=false}) {return <footer className="email-footer"><Topography/><div className="footer-inner"><strong>The world's a big place. Get out there.</strong><div className="footer-brand"><span>Much Better Adventures</span><em>Do Wild Things</em></div>{links && <div className="footer-links">Adventure inspiration | Our adventures | Unsubscribe</div>}</div></footer>}

function Newsletter({onCTA}) {
 return <article className="email newsletter"><EmailTop preheader={campaigns[0].preheader}/>
   <section className="editorial-hero"><div className="hero-copy"><span className="eyebrow"><span className="mini-line"/> THE ADVENTURE EDIT · 01</span><h1>Go solo.<br/><em>Find your</em><br/>people.</h1><p>Somewhere on your camera roll, there's a place you've been meaning to visit.</p><p>You've talked about going with your friends, but between work, family and everyone's different schedules, finding the right time hasn't been easy.</p><p>And that adventure? Still waiting.</p></div><div className="hero-visual"><Image src={PHOTO.mountain} alt="Snow-covered mountains beneath a dramatic winter sky"/><Topography/><span className="vertical-tag">THE WORLD IS WAITING / VOL. 01</span></div></section>
   <section className="newsletter-question"><div className="asterisk">✳</div><h2>What if you could stop waiting for the perfect time to go together, travel solo without travelling alone?</h2><CTA onClick={onCTA}>EXPLORE WINTER ADVENTURES →</CTA></section>
   <Image className="newsletter-panorama" src={PHOTO.mountain2} alt="An expansive mountain landscape inviting exploration"/>
   <section className="story-panel"><span className="section-index">01 / A DIFFERENT WAY TO GO</span><h2>Solo doesn't have to mean <em>alone.</em></h2><div className="story-text"><p>Think snowy trails, crisp mountain air and a winter landscape that takes your breath away.</p><p>Now imagine sharing it with people who are just as glad they came as you are.</p><p>That's the beauty of a small-group adventure. You get to explore somewhere new, discover more with expert local guides and meet people who came for the same reason you did.</p><p>No need to arrive with a ready-made group. Just bring yourself.</p></div></section>
   <section className="photo-story"><Image src={PHOTO.friends} alt="Friends sharing a warm, joyful moment together"/><div className="photo-caption">A GOOD ADVENTURE IS EVEN BETTER SHARED <ArrowUpRight size={15}/></div></section>
   <section className="story-panel second-story"><span className="section-index">02 / THE PEOPLE YOU MEET</span><h2>Your people might be out there, <em>too.</em></h2><p>There's something about sharing an adventure that makes strangers feel less like strangers.</p><p>One minute, you're introducing yourself. A few days later, you're swapping stories, celebrating the day's highs and wondering how the trip went by so quickly.</p><p>And the friends you'd originally hoped to travel with? You can still plan that trip together, too.</p><div className="takeaway">One adventure doesn't have to wait for another.</div><CTA onClick={onCTA}>FIND YOUR NEXT ADVENTURE →</CTA></section>
   <EmailFooter links/>
 </article>
}

function Promo({onCTA}) {
 return <article className="email promo"><EmailTop preheader={campaigns[1].preheader}/>
   <section className="promo-heading"><span className="eyebrow">THE WINTER ESCAPE / 02</span><h1>Your friends can come next time. <em>Lapland is calling.</em></h1><div className="location-line"><span>FINNISH LAPLAND</span><span>FOUR NIGHTS</span></div></section>
   <div className="promo-hero-image"><Image src={PHOTO.aurora} alt="Northern lights dancing over an Arctic landscape"/><span className="promo-image-label">BEYOND THE EVERYDAY <ArrowUpRight size={14}/></span></div>
   <section className="promo-intro"><div className="promo-rail">A DIFFERENT KIND OF GETAWAY <span>↘</span></div><div><p>Some trips take a little more planning than others, especially when everyone's juggling work, annual leave and life outside the group chat.</p><p>And while you're figuring out when everyone can go, there's a whole world of adventures you've been meaning to have.</p><p>So, what if your next trip didn't have to wait for everyone's calendar to clear?</p><h2>Meet us in <em>Finnish Lapland.</em></h2><p>Four nights of Arctic wilderness, husky sledding through snowy forests, and the chance to catch the Northern Lights lighting up the sky. It's the kind of winter adventure that stays with you long after you've unpacked your bags.</p><p>And you don't need to bring your own group to experience it with one.</p></div></section>
   <section className="promo-gallery"><Image src={PHOTO.forest} alt="Quiet snowy forest in winter"/><Image src={PHOTO.husky} alt="A husky, evocative of winter sledding adventures"/><div className="gallery-label">INTO THE ARCTIC <span>01 / 02</span></div></section>
   <section className="promo-story"><Topography/><span className="section-index">THE BEST PART? SHARING IT.</span><h2>Come solo.<br/><em>Leave with stories to share.</em></h2><p>Our small-group adventures bring together people who want to get out there, explore somewhere different and make the most of their time away. With expert local guides leading the way, you can spend less time figuring everything out and more time enjoying the experience.</p><p>You might arrive without knowing a soul, but you'll have plenty to talk about by the end of the trip.</p><p>And your friends? There's always another adventure to plan together.</p></section>
   <section className="promo-final"><div className="big-four">04<span>NIGHTS</span></div><div><CTA onClick={onCTA} light>EXPLORE FINNISH LAPLAND →</CTA><p>Four nights. Arctic adventures. New people to share them with.</p><strong>Your next adventure is waiting.</strong></div></section>
   <footer className="promo-footer"><span>Much Better Adventures</span><em>Do Wild Things</em></footer>
 </article>
}

function StrategyPanel() {
 const [open,setOpen] = useState(false)
 return <section className={'strategy '+(open?'strategy-open':'')}><button className="strategy-toggle" onClick={()=>setOpen(!open)} aria-expanded={open}><span className="strategy-kicker"><Compass size={17}/> THE THINKING BEHIND THE CAMPAIGN</span><span>{open?'Hide strategy':'View campaign strategy'} <ChevronDown size={16}/></span></button>{open && <div className="strategy-content"><div className="strategy-grid"><div><span className="micro">01 / AUDIENCE</span><p>People eager to see more of the world whose plans are held up by work, annual leave, family and conflicting schedules; open to solo travel, but looking for companionship and structure.</p></div><div><span className="micro">02 / HUMAN TENSION</span><p>Adventures are postponed while everyone waits for the same window of availability.</p></div><div><span className="micro">03 / BRAND ROLE</span><p>Much Better Adventures makes exploring somewhere new easier through small groups and expert local guides.</p></div></div><div className="strategy-bottom"><div><span className="micro">STORYBRAND / SB7</span><ol><li><b>Character:</b> Someone who wants to see more of the world.</li><li><b>Problem:</b> Plans keep slipping as schedules conflict.</li><li><b>Guide:</b> Solo-friendly, expert-led group adventure.</li><li><b>Plan:</b> Choose an adventure, join a group, go.</li><li><b>CTA:</b> Explore winter adventures / Finnish Lapland.</li><li><b>Avoid failure:</b> Keep putting adventures off.</li><li><b>Success:</b> Explore, connect and come home with stories.</li></ol></div><div><span className="micro">A CONNECTED JOURNEY</span><div className="strategy-stage"><b>01 · Inspire</b><p>Reframe the wait; show that solo doesn't mean alone.</p></div><div className="strategy-stage"><b>02 · Consider</b><p>Make the possibility real through four nights in Finnish Lapland.</p></div></div></div></div>}</section>
}
function CTAOverlay({label,onClose}) {
 useEffect(()=>{if(!label)return; const key=e=>{if(e.key==='Escape')onClose()};window.addEventListener('keydown',key);return()=>window.removeEventListener('keydown',key)},[label,onClose])
 if(!label)return null
 return <div className="modal-backdrop" onMouseDown={e=>{if(e.target===e.currentTarget)onClose()}}><div className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title"><button className="modal-close" onClick={onClose} aria-label="Close preview"><X size={20}/></button><div className="modal-icon"><ArrowUpRight size={26}/></div><span className="micro">CTA INTERACTION · DEMONSTRATION</span><h2 id="modal-title">Your next step, imagined.</h2><p><strong>{label}</strong> would lead a reader to the relevant adventures or Finnish Lapland trip discovery experience in a live campaign.</p><p className="modal-note">This is a portfolio preview. No external page has been opened and no booking has been made.</p><button className="modal-done" onClick={onClose}>Back to the email <ArrowRight size={17}/></button></div></div>
}

function App() {
 const [selected,setSelected] = useState(0)
 const [mode,setMode] = useState('desktop')
 const [cta,setCta] = useState(null)
 const current=campaigns[selected]
 return <main className="site"><div className="ambient-topo"><Topography/></div><header className="site-header"><div className="site-brand"><span className="site-monogram">M<span>↗</span></span><span>CAMPAIGN<br/><strong>FIELDNOTES</strong></span></div><div className="header-right"><span>SPECULATIVE EMAIL CAMPAIGN</span><span className="header-dot"/> <span>2026 · PORTFOLIO STUDY</span></div></header>
 <section className="project-intro"><div><span className="eyebrow">MUCH BETTER ADVENTURES <span className="intro-bar">/</span> EMAIL SERIES 001</span><h1>Go solo.<br/><em>Find your people.</em></h1></div><div className="intro-aside"><span className="tiny-heading">THE CREATIVE PREMISE</span><p>You can travel solo <strong>without travelling alone.</strong></p><span className="intro-detail">Two emails. One invitation to stop waiting.</span></div></section>
 <div className="workspace"><div className="browserbar"><div className="window-dots"><i/><i/><i/></div><div className="address"><span className="address-lock">◇</span> campaign-studio / much-better-adventures / winter-series</div><div className="window-label">CAMPAIGN PREVIEW <Maximize2 size={13}/></div></div>
 <div className="workspace-inner"><div className="workspace-heading"><div className="workspace-id"><span className="workspace-symbol"><Map size={19}/></span><div><span className="micro">THE CAMPAIGN WORKSPACE</span><h2>Adventures, unpaused.</h2></div></div><span className="workspace-count"><span className="green-light"/> 02 CONNECTED EMAILS</span></div>
 <StrategyPanel/>
 <div className="workspace-body"><aside className="sidebar"><div className="sidebar-top"><span className="micro">CAMPAIGN SEQUENCE</span><span>01 — 02</span></div><div className="campaign-trail" aria-hidden="true"/>{campaigns.map((item,i)=><button key={item.title} className={'campaign-tab '+(selected===i?'selected':'')} onClick={()=>setSelected(i)} aria-pressed={selected===i}><span className="tab-number">0{i+1}<span className="tab-dot"/></span><span className="tab-info"><strong>{item.title}</strong><small>{item.type}</small><span>{item.description}</span></span><ArrowUpRight className="tab-arrow" size={17}/></button>)}<div className="sidebar-note"><div className="noteline"><Compass size={17}/> CAMPAIGN NORTH STAR</div><p>Travel solo.<br/><em>Not alone.</em></p><Topography/></div></aside>
 <section className="preview-area" aria-label="Email preview"><div className="preview-toolbar"><div><span className="micro">LIVE EMAIL PREVIEW</span><div className="preview-title"><span className="preview-status"/> {current.title}</div></div><div className="view-controls" role="group" aria-label="Preview display mode"><button className={mode==='desktop'?'active':''} onClick={()=>setMode('desktop')} aria-pressed={mode==='desktop'}><Monitor size={17}/> <span>Desktop</span></button><button className={mode==='mobile'?'active':''} onClick={()=>setMode('mobile')} aria-pressed={mode==='mobile'}><Smartphone size={17}/> <span>Mobile</span></button></div></div>
 <div className="message-meta"><span>FROM <strong>Much Better Adventures</strong></span><span>SUBJECT <strong>{current.subject}</strong></span></div>
 <div className={'email-stage '+(mode==='mobile'?'is-mobile':'is-desktop')}><div className="email-shell" key={selected}>{selected===0?<Newsletter onCTA={setCta}/>:<Promo onCTA={setCta}/>}</div></div>
 <div className="inactive-stack"><div className="stack-intro"><span className="micro">OTHER CAMPAIGN MESSAGES</span><span>NOT INCLUDED IN THIS PREVIEW</span></div><div className="inactive-item" aria-disabled="true"><span>—</span><div><strong>Additional email · Unavailable</strong><small>Outside this two-email campaign</small></div><span>LOCKED</span></div><div className="inactive-item deeper" aria-disabled="true"><span>—</span><div><strong>Additional email · Unavailable</strong><small>Outside this two-email campaign</small></div><span>LOCKED</span></div></div>
 </section></div>
 <footer className="workspace-footer"><span><span className="footer-dot"/> INTERACTIVE CAMPAIGN STUDY</span><span>DESIGNED FOR EXPLORATION, NOT EMAIL DELIVERY</span></footer></div></div>
 <footer className="site-footer"><div>MADE TO EXPLORE <ArrowUpRight size={14}/></div><span>AN INDEPENDENT PORTFOLIO CONCEPT · NOT AN OFFICIAL MBA CAMPAIGN</span><span>END OF FIELDNOTES / 001</span></footer><CTAOverlay label={cta} onClose={()=>setCta(null)}/></main>
}
export default App
