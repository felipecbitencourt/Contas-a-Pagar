import { StrictMode, useEffect, useMemo, useState } from 'react'
import { createRoot } from 'react-dom/client'

const TWEAK_DEFAULTS = {
  mood: 'solar',
  motion: 'calm',
  density: 'balanced',
}

const MOTION_MULT = { still: 0.001, calm: 0.5, lively: 1, hyper: 2.2 }

function useTweaks(defaults) {
  const [tweaks, setTweaks] = useState(defaults)

  const setTweak = (key, value) => {
    setTweaks((prev) => ({ ...prev, [key]: value }))
  }

  return [tweaks, setTweak]
}

function TweaksApp() {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS)

  useEffect(() => {
    document.body.dataset.mood = tweaks.mood
    document.body.dataset.motion = tweaks.motion
    document.body.dataset.density = tweaks.density
    document.body.dataset.theme =
      tweaks.mood === 'solar' || tweaks.mood === 'ocean' || tweaks.mood === 'purple'
        ? 'dark'
        : 'light'
    document.documentElement.style.setProperty('--motion', MOTION_MULT[tweaks.motion] ?? 1)
  }, [tweaks])

  useEffect(() => {
    const btn = document.getElementById('darkToggle')
    if (!btn) return undefined

    const handler = () => {
      const isDark = tweaks.mood === 'solar' || tweaks.mood === 'ocean' || tweaks.mood === 'purple'
      setTweak('mood', isDark ? 'paper' : 'solar')
    }

    btn.addEventListener('click', handler)
    return () => btn.removeEventListener('click', handler)
  }, [tweaks.mood])

  const panelStyle = useMemo(
    () => ({
      position: 'fixed',
      right: 16,
      bottom: 16,
      zIndex: 999,
      width: 260,
      borderRadius: 12,
      padding: 12,
      border: '1px solid rgba(139,163,196,0.4)',
      background: 'rgba(7,17,31,0.82)',
      backdropFilter: 'blur(8px)',
      color: '#e9f1ff',
      fontFamily: 'Inter, sans-serif',
    }),
    [],
  )

  const titleStyle = { fontWeight: 600, marginBottom: 8, fontSize: 14 }
  const sectionStyle = { fontSize: 12, opacity: 0.8, marginTop: 8, marginBottom: 4 }
  const groupStyle = { display: 'flex', gap: 6, flexWrap: 'wrap' }
  const buttonBase = {
    border: '1px solid rgba(139,163,196,0.35)',
    background: 'transparent',
    color: '#e9f1ff',
    borderRadius: 8,
    padding: '4px 8px',
    fontSize: 12,
    cursor: 'pointer',
  }

  const OptionButton = ({ label, active, onClick }) => (
    <button
      type="button"
      onClick={onClick}
      style={{
        ...buttonBase,
        background: active ? 'rgba(139,163,196,0.2)' : 'transparent',
        borderColor: active ? 'rgba(139,163,196,0.7)' : 'rgba(139,163,196,0.35)',
      }}
    >
      {label}
    </button>
  )

  return (
    <div style={panelStyle}>
      <div style={titleStyle}>Configurações da página</div>

      <div style={sectionStyle}>Mood</div>
      <div style={groupStyle}>
        {['ocean', 'solar', 'purple', 'paper'].map((m) => (
          <OptionButton key={m} label={m} active={tweaks.mood === m} onClick={() => setTweak('mood', m)} />
        ))}
      </div>

      <div style={sectionStyle}>Movimento</div>
      <div style={groupStyle}>
        {['still', 'calm', 'lively', 'hyper'].map((m) => (
          <OptionButton key={m} label={m} active={tweaks.motion === m} onClick={() => setTweak('motion', m)} />
        ))}
      </div>

      <div style={sectionStyle}>Densidade</div>
      <div style={groupStyle}>
        {['cinematic', 'balanced', 'compact'].map((d) => (
          <OptionButton key={d} label={d} active={tweaks.density === d} onClick={() => setTweak('density', d)} />
        ))}
      </div>
    </div>
  )
}

function HybridWidget() {
  return (
    <div
      style={{
        marginTop: 20,
        padding: '12px 16px',
        border: '1px solid var(--border-strong)',
        borderRadius: 12,
        background: 'rgba(19,38,66,0.35)',
        color: 'var(--ink-dim)',
        fontSize: 13,
      }}
    >
      Bloco React ativo: arquitetura híbrida (HTML + React).
    </div>
  )
}

const widgetRoot = document.getElementById('react-widget-root')
if (widgetRoot) {
  createRoot(widgetRoot).render(
    <StrictMode>
      <HybridWidget />
    </StrictMode>,
  )
}

const tweaksRoot = document.getElementById('tweaks-root')
if (tweaksRoot) {
  createRoot(tweaksRoot).render(
    <StrictMode>
      <TweaksApp />
    </StrictMode>,
  )
}
