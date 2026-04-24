import { useEffect } from 'react'

function App() {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal')
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = Number(entry.target.getAttribute('data-delay') || 0)
            setTimeout(() => entry.target.classList.add('in'), delay)
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 },
    )
    reveals.forEach((item) => io.observe(item))

    const countUp = (el, target) => {
      const duration = 1600
      const start = performance.now()
      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1)
        const eased = 1 - (1 - progress) ** 3
        const current = Math.floor(target * eased)
        if (el.firstChild) el.firstChild.textContent = String(current)
        if (progress < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    }

    const statEls = document.querySelectorAll('[data-count]')
    const statIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            countUp(entry.target, Number(entry.target.getAttribute('data-count')))
            statIO.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.5 },
    )
    statEls.forEach((item) => statIO.observe(item))

    const animateValue = (el, from, to, duration, formatter) => {
      const start = performance.now()
      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1)
        const eased = 1 - (1 - progress) ** 3
        const value = from + (to - from) * eased
        el.textContent = formatter(value)
        if (progress < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    }

    const dailyEl = document.getElementById('daily')
    const docsEl = document.getElementById('docs')
    const dailyIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && dailyEl && docsEl) {
            animateValue(dailyEl, 0, 8.4, 2000, (v) => `R$ ${v.toFixed(1)}M`)
            animateValue(docsEl, 0, 1247, 2000, (v) => Math.floor(v).toLocaleString('pt-BR'))
            dailyIO.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.4 },
    )
    if (dailyEl) dailyIO.observe(dailyEl)

    const modules = document.querySelectorAll('.module')
    const moveHandlers = []
    modules.forEach((module) => {
      const handler = (event) => {
        const rect = module.getBoundingClientRect()
        module.style.setProperty('--mx', `${((event.clientX - rect.left) / rect.width) * 100}%`)
        module.style.setProperty('--my', `${((event.clientY - rect.top) / rect.height) * 100}%`)
      }
      module.addEventListener('mousemove', handler)
      moveHandlers.push({ module, handler })
    })

    const scene = document.getElementById('scene')
    const mouseMove = (event) => {
      if (!scene) return
      const x = event.clientX / window.innerWidth - 0.5
      const y = event.clientY / window.innerHeight - 0.5
      scene.style.transform = `rotateY(${x * 6}deg) rotateX(${y * -6}deg)`
    }
    document.addEventListener('mousemove', mouseMove)

    const particleContainer = document.getElementById('particles')
    if (particleContainer) {
      for (let i = 0; i < 28; i += 1) {
        const particle = document.createElement('div')
        particle.className = 'particle'
        particle.style.left = `${Math.random() * 100}%`
        particle.style.top = `${Math.random() * 100}vh`
        particle.style.animationDuration = `${14 + Math.random() * 18}s`
        particle.style.animationDelay = `${-Math.random() * 20}s`
        particle.style.setProperty('--dx', `${Math.random() * 100 - 50}px`)
        particle.style.opacity = String(0.2 + Math.random() * 0.4)
        particleContainer.appendChild(particle)
      }
    }

    return () => {
      io.disconnect()
      statIO.disconnect()
      dailyIO.disconnect()
      document.removeEventListener('mousemove', mouseMove)
      moveHandlers.forEach(({ module, handler }) => module.removeEventListener('mousemove', handler))
      if (particleContainer) {
        particleContainer.innerHTML = ''
      }
    }
  }, [])

  return (
    <>
      <div className="bg-field"></div>
      <div className="grid-bg"></div>
      <div className="orb o1"></div>
      <div className="orb o2"></div>
      <div className="orb o3"></div>
      <div className="particles" id="particles"></div>

      <nav className="nav">
        <div className="brand">
          <div className="brand-mark">Z</div>
          <div className="brand-text">
            Plataforma Transformação <span>/ Zaffari</span>
          </div>
        </div>
        <div className="nav-right">
          <a href="#modulos" className="hide-m">
            Módulos
          </a>
          <a href="#fluxo" className="hide-m">
            Fluxo
          </a>
          <a href="#empresas" className="hide-m">
            Empresas
          </a>
          <button id="darkToggle" className="dark-toggle" aria-label="Alternar modo escuro">
            <svg className="d-sun" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="4"></circle>
              <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"></path>
            </svg>
            <svg className="d-moon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </button>
          <div className="live-pill">
            <span className="live-dot"></span>
            <span>3 MÓDULOS</span>
          </div>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-left">
          <div className="eyebrow">
            <span className="e-dot"></span>Curso Financeiro · ADM Contas a Pagar
          </div>
          <h1>
            <span className="word">A</span> <span className="word">Jornada</span> <span className="word">do</span>{' '}
            <span className="word">Contas</span> <span className="word">a Pagar.</span>
          </h1>
          <p className="hero-sub">
            Um treinamento imersivo para a equipe financeira do Grupo Zaffari. Do recebimento da nota fiscal a conciliacao
            bancaria cada etapa, cada bloqueio, cada transacao do SAP ao banco, dominados.
          </p>
          <div className="hero-stats">
            <div className="stat">
              <div className="n" data-count="56">
                00<span className="unit">min</span>
              </div>
              <div className="l">Duração total</div>
            </div>
            <div className="stat">
              <div className="n" data-count="3">
                0<span className="unit">módulos</span>
              </div>
              <div className="l">Conteúdo estruturado</div>
            </div>
            <div className="stat">
              <div className="n" data-count="42">
                00<span className="unit">etapas</span>
              </div>
              <div className="l">Fluxo mapeado</div>
            </div>
          </div>
          <div className="cta-row">
            <a href="#modulos" className="btn btn-primary">
              Iniciar a Jornada
            </a>
            <a href="#fluxo" className="btn btn-ghost">
              Ver prévia
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="scene" id="scene">
            <div className="coin-stack">
              <div className="coin-ring"></div>
              <div className="coin-ring r2"></div>
              <div className="coin-ring r3"></div>
              <div className="coin-center">
                <span className="rs">R$</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="modulos">
        <div className="sec-head reveal">
          <div className="sec-tag">Trilha de aprendizado</div>
          <h2>
            Três módulos. <em>Uma jornada</em> completa.
          </h2>
          <p>
            Construímos o curso em camadas progressivas: primeiro o contexto e a estrutura do setor, depois o detalhamento
            operacional, e por fim a fixação do conhecimento.
          </p>
        </div>
        <div className="modules">
          <article className="module reveal" data-delay="0">
            <div className="module-num">
              <span>MÓDULO 01</span>
              <span>11 MIN</span>
            </div>
            <div className="module-icon"></div>
            <h3>Fundamentos do Contas a Pagar</h3>
            <p>Estrutura do setor, empresas controladas do Grupo, macrofluxo do processo e as categorias de pagamento.</p>
          </article>
          <article className="module reveal" data-delay="120">
            <div className="module-num">
              <span>MÓDULO 02</span>
              <span>30 MIN</span>
            </div>
            <div className="module-icon"></div>
            <h3>Fluxo Operacional Detalhado</h3>
            <p>As três grandes fases - Preparação, Efetivação e Conciliação - dissecadas passo a passo com transações SAP reais.</p>
          </article>
          <article className="module reveal" data-delay="240">
            <div className="module-num">
              <span>MÓDULO 03</span>
              <span>15 MIN</span>
            </div>
            <div className="module-icon"></div>
            <h3>Avaliação de Conhecimento</h3>
            <p>Quiz interativo para consolidar os aprendizados.</p>
          </article>
        </div>
      </section>

      <section id="fluxo">
        <div className="sec-head reveal">
          <div className="sec-tag">Macrofluxo do processo</div>
          <h2>
            Da solicitação à <em>conciliação final</em>.
          </h2>
          <p>Cada despesa percorre seis etapas com controle, rastreabilidade e conformidade em cada ponto do caminho.</p>
        </div>
      </section>

      <section id="empresas">
        <div className="companies">
          <div className="reveal">
            <div className="sec-tag">Abrangência do Grupo</div>
            <h2 style={{ fontSize: 'clamp(32px,4vw,52px)', marginBottom: 20, fontWeight: 500, letterSpacing: '-0.03em' }}>
              Empresas controladas, <em>caixas independentes.</em>
            </h2>
            <p style={{ fontSize: 17, color: 'var(--ink-dim)', marginBottom: 32 }}>
              O Grupo Zaffari atua em diversos segmentos além do varejo e atacado. Cada empresa controlada possui caixa
              próprio e gestão financeira individual.
            </p>
            <div style={{ display: 'flex', gap: 32, marginTop: 32 }}>
              <div>
                <div className="mono" style={{ fontSize: 11, color: 'var(--ink-mute)', letterSpacing: '0.08em', marginBottom: 8 }}>
                  FLUXO DIÁRIO
                </div>
                <div style={{ fontFamily: 'Space Grotesk', fontSize: 36, fontWeight: 500 }} id="daily">
                  R$ 0
                </div>
              </div>
              <div>
                <div className="mono" style={{ fontSize: 11, color: 'var(--ink-mute)', letterSpacing: '0.08em', marginBottom: 8 }}>
                  DOCUMENTOS / DIA
                </div>
                <div style={{ fontFamily: 'Space Grotesk', fontSize: 36, fontWeight: 500 }} id="docs">
                  0
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="cta-final reveal">
        <h2>
          Pronto para começar a <em style={{ fontStyle: 'italic', color: 'var(--accent)', fontFamily: 'Space Grotesk' }}>Jornada?</em>
        </h2>
        <p>Você faz parte de um time essencial para a saúde financeira do Grupo.</p>
      </div>

      <footer>
        <div>© 2026 Grupo Zaffari · Plataforma Transformação</div>
        <div className="f-right">
          <span>Responsável: Kévellin</span>
          <span>ADM · Contas a Pagar</span>
        </div>
      </footer>
    </>
  )
}

export default App
