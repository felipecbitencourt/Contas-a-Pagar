const CursoInterativos = {
  icons: {
    inbox:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><path d="M3 13h4l2 3h6l2-3h4"/><path d="M5 13V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v7"/><path d="M5 13v5a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-5"/></svg>',
    search:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>',
    card:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 10h18"/></svg>',
    shield:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><path d="M12 3l7 3v6c0 5-3.5 7.5-7 9-3.5-1.5-7-4-7-9V6l7-3z"/><path d="m9.5 12 1.8 1.8L14.8 10"/></svg>',
    building:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><rect x="4" y="3" width="16" height="18" rx="2"/><path d="M9 7h1M14 7h1M9 11h1M14 11h1M9 15h1M14 15h1"/></svg>',
    wrench:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><path d="M14.7 6.3a4 4 0 1 0 3 3L10 17l-3 1 1-3 7.7-7.7z"/></svg>',
    bank:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><path d="M3 10h18"/><path d="M5 10v8M9 10v8M15 10v8M19 10v8"/><path d="M2 18h20"/><path d="m12 3 9 5H3l9-5z"/></svg>',
    clipboard:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><rect x="6" y="5" width="12" height="16" rx="2"/><path d="M9 5.5h6M10 3h4a1 1 0 0 1 1 1v1H9V4a1 1 0 0 1 1-1z"/></svg>',
    cart:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><circle cx="9" cy="20" r="1"/><circle cx="18" cy="20" r="1"/><path d="M3 4h2l2.2 10.2a1 1 0 0 0 1 .8H19a1 1 0 0 0 1-.8L22 7H7"/></svg>',
    box:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><path d="m12 3 8 4.5v9L12 21 4 16.5v-9L12 3z"/><path d="M12 12 4 7.5M12 12l8-4.5M12 12v9"/></svg>',
    chart:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><path d="M4 20V10M10 20V4M16 20v-7M22 20v-11"/></svg>',
    split:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><path d="M4 6h8M4 18h8M12 6c5 0 8 2 8 6s-3 6-8 6"/><path d="m10 8 2-2-2-2M10 16l2 2-2 2"/></svg>',
    calendar:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M8 3v4M16 3v4M3 10h18"/></svg>',
    list:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><path d="M8 6h13M8 12h13M8 18h13"/><circle cx="4" cy="6" r="1"/><circle cx="4" cy="12" r="1"/><circle cx="4" cy="18" r="1"/></svg>',
    target:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4"/><path d="M22 2 12 12"/></svg>',
    clock:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><circle cx="12" cy="12" r="9"/><path d="M12 7v6l4 2"/></svg>',
    trace:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><path d="M3 12h5l2-3 4 6 2-3h5"/><circle cx="3" cy="12" r="1"/><circle cx="21" cy="12" r="1"/></svg>',
    note:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><path d="M14 3v6h6"/></svg>',
    check:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><path d="m5 12 4 4 10-10"/></svg>',
    folder:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><path d="M3 6a2 2 0 0 1 2-2h5l2 2h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6z"/></svg>',
  },

  renderIcon(iconName, className = "") {
    const svg = this.icons[iconName] || this.icons.note
    return `<span class="${className}" aria-hidden="true">${svg}</span>`
  },

  renderHeroBloco({ kicker, lead }) {
    return `
      <section class="lesson-hero">
        <span class="lesson-kicker">${kicker}</span>
        <p class="lesson-lead">${lead}</p>
      </section>
    `
  },

  renderCardsInterativos({ cards, activeId, dataAttr }) {
    const cardsHtml = cards
      .map(
        (card) => `
          <button class="interactive-card ${activeId === card.id ? "is-active" : ""}" type="button" ${dataAttr}="${card.id}">
            ${card.icon ? this.renderIcon(card.icon, "card-icon") : ""}
            <h4>${card.title}</h4>
            <p>${card.subtitle}</p>
          </button>
        `,
      )
      .join("")

    return `<div class="cards-grid">${cardsHtml}</div>`
  },

  renderMetricRow({ metrics }) {
    const metricsHtml = metrics
      .map(
        (m) => `
          <div class="metric-card">
            ${m.icon ? this.renderIcon(m.icon, "metric-card-icon") : ""}
            <span class="metric-card-value">${m.value}</span>
            <span class="metric-card-label">${m.label}</span>
          </div>
        `,
      )
      .join("")
    return `<div class="metric-row">${metricsHtml}</div>`
  },

  renderCuriosidadeBox({ title = "Curiosidade", text, icon = "note" }) {
    return `
      <aside class="curiosity-box">
        <div class="curiosity-head">
          ${this.renderIcon(icon, "curiosity-icon")}
          <h4>${title}</h4>
        </div>
        <p>${text}</p>
      </aside>
    `
  },

  renderImagemLegenda({ src, alt, caption, credit = "Imagem ilustrativa (placeholder)." }) {
    return `
      <figure class="image-card">
        <img src="${src}" alt="${alt}" loading="lazy" />
        <figcaption>
          <strong>${caption}</strong>
          <span>${credit}</span>
        </figcaption>
      </figure>
    `
  },

  renderMiniGraficoBarras({ title, bars }) {
    const safeBars = bars || []
    const max = Math.max(...safeBars.map((b) => b.value), 1)
    const barsHtml = safeBars
      .map((bar) => {
        const pct = Math.max(4, Math.round((bar.value / max) * 100))
        return `
          <div class="mini-bar-row">
            <span class="mini-bar-label">${bar.label}</span>
            <div class="mini-bar-track"><span class="mini-bar-fill" style="width:${pct}%"></span></div>
            <span class="mini-bar-value">${bar.valueLabel ?? bar.value}</span>
          </div>
        `
      })
      .join("")
    return `
      <section class="mini-chart">
        <h4>${title}</h4>
        <div class="mini-chart-bars">${barsHtml}</div>
      </section>
    `
  },

  renderGraficoTempo({ title, points, conclusion }) {
    const safePoints = points || []
    const max = Math.max(...safePoints.map((p) => p.value), 1)
    const rows = safePoints
      .map((point) => {
        const pct = Math.max(8, Math.round((point.value / max) * 100))
        return `
          <div class="time-chart-row">
            <span class="time-chart-period">${point.period}</span>
            <div class="time-chart-track">
              <span class="time-chart-fill" style="width:${pct}%"></span>
            </div>
            <span class="time-chart-value">${point.valueLabel ?? point.value}</span>
          </div>
        `
      })
      .join("")
    return `
      <section class="time-chart">
        <h4>${title}</h4>
        <div class="time-chart-grid">${rows}</div>
        ${conclusion ? `<p class="time-chart-note">${conclusion}</p>` : ""}
      </section>
    `
  },

  renderGraficoPizza({ title, segments, legendTitle }) {
    const safeSegments = segments || []
    const total = safeSegments.reduce((acc, s) => acc + s.value, 0) || 1
    let cursor = 0
    const gradient = safeSegments
      .map((segment) => {
        const start = Math.round((cursor / total) * 360)
        cursor += segment.value
        const end = Math.round((cursor / total) * 360)
        return `${segment.color} ${start}deg ${end}deg`
      })
      .join(", ")
    const legend = safeSegments
      .map(
        (segment) => `
          <li>
            <span class="pie-dot" style="background:${segment.color}"></span>
            <span>${segment.label}</span>
            <strong>${segment.valueLabel ?? segment.value}</strong>
          </li>
        `,
      )
      .join("")
    return `
      <section class="pie-chart-card">
        <h4>${title}</h4>
        <div class="pie-chart-wrap">
          <div class="pie-chart-donut" style="--pie-gradient: conic-gradient(${gradient});" aria-hidden="true"></div>
          <div class="pie-chart-legend">
            ${legendTitle ? `<p>${legendTitle}</p>` : ""}
            <ul>${legend}</ul>
          </div>
        </div>
      </section>
    `
  },

  renderTimelineCompacta({ title, items }) {
    const rows = (items || [])
      .map(
        (item) => `
          <li class="timeline-item">
            <span class="timeline-dot" aria-hidden="true"></span>
            <div>
              <strong>${item.title}</strong>
              <p>${item.text}</p>
            </div>
          </li>
        `,
      )
      .join("")
    return `
      <section class="timeline-compact">
        <h4>${title}</h4>
        <ul>${rows}</ul>
      </section>
    `
  },

  renderHotspotPainel({ title, points, dataAttr }) {
    const list = (points || [])
      .map(
        (p, idx) =>
          `<button type="button" class="hotspot-btn${idx === 0 ? " is-active" : ""}" ${dataAttr}="${p.id}">${p.label}</button>`,
      )
      .join("")
    const first = points?.[0]
    return `
      <section class="hotspot-panel">
        <h4>${title}</h4>
        <div class="hotspot-list">${list}</div>
        <article class="hotspot-detail">
          <h5>${first?.title ?? ""}</h5>
          <p>${first?.text ?? ""}</p>
        </article>
      </section>
    `
  },

  renderPainelDetalhe({ title, text }) {
    return `
      <article class="detail-panel">
        <h4>${title}</h4>
        <p>${text}</p>
      </article>
    `
  },

  renderStepperFluxo({ steps, activeId, dataAttr }) {
    const stepsHtml = steps
      .map(
        (step, index) => `
          <button class="flow-step ${activeId === step.id ? "is-active" : ""}" type="button" ${dataAttr}="${step.id}" aria-label="Etapa ${index + 1}: ${step.title}">
            <span class="flow-step-num">${String(index + 1).padStart(2, "0")}</span>
            ${step.icon ? this.renderIcon(step.icon, "flow-step-icon") : ""}
            <span class="flow-step-title">${step.title}</span>
          </button>
        `,
      )
      .join("")

    return `<div class="flow-stepper">${stepsHtml}</div>`
  },

  bindSelectableCards({ container, dataAttr, details, onTrack, onChange }) {
    const selector = `[${dataAttr}]`
    const buttons = [...container.querySelectorAll(selector)]
    const panel = container.querySelector(".detail-panel")

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const newId = button.getAttribute(dataAttr)

        // Atualiza estado ativo dos cards sem re-renderizar
        buttons.forEach((b) =>
          b.classList.toggle("is-active", b.getAttribute(dataAttr) === newId)
        )

        // Atualiza painel de detalhe in-place com animação
        if (panel && details?.[newId]) {
          const { title, text } = details[newId]
          panel.querySelector("h4").textContent = title
          panel.querySelector("p").textContent = text
          panel.style.animation = "none"
          void panel.offsetHeight
          panel.style.animation = "fadeSlideUp 0.3s cubic-bezier(0.22,1,0.36,1) both"
        }

        // Atualiza trilha de progresso (slide 3)
        if (onTrack) onTrack(newId, container)

        onChange(newId)
      })

      button.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault()
          button.click()
        }
      })
    })
  },

  bindStepper({ container, dataAttr, onChange }) {
    const selector = `[${dataAttr}]`
    const buttons = [...container.querySelectorAll(selector)]
    buttons.forEach((button, idx) => {
      button.addEventListener("click", () => onChange(button.getAttribute(dataAttr)))
      button.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault()
          onChange(button.getAttribute(dataAttr))
        }
        if (event.key === "ArrowRight") {
          event.preventDefault()
          buttons[(idx + 1) % buttons.length]?.focus()
        }
        if (event.key === "ArrowLeft") {
          event.preventDefault()
          buttons[(idx - 1 + buttons.length) % buttons.length]?.focus()
        }
      })
    })
  },

  /** Acordeão nativo (`<details>`) com `name` opcional para grupo exclusivo. */
  renderAccordion({ items, groupName }) {
    const groupAttr = groupName ? ` name="${groupName}"` : ""
    return `
      <div class="curso-accordion">
        ${items
          .map(
            (item) => `
          <details class="curso-acc-item"${groupAttr}>
            <summary class="curso-acc-summary">${item.title}</summary>
            <div class="curso-acc-body">${item.body}</div>
          </details>
        `,
          )
          .join("")}
      </div>
    `
  },

  renderReveal({ label, html }) {
    return `
      <div class="curso-reveal">
        <button type="button" class="curso-reveal-btn" aria-expanded="false">${label}</button>
        <div class="curso-reveal-panel" hidden>${html}</div>
      </div>
    `
  },

  bindReveal(container) {
    container.querySelectorAll(".curso-reveal").forEach((wrap) => {
      const btn = wrap.querySelector(".curso-reveal-btn")
      const panel = wrap.querySelector(".curso-reveal-panel")
      if (!btn || !panel) return
      btn.addEventListener("click", () => {
        const open = btn.getAttribute("aria-expanded") === "true"
        const next = !open
        btn.setAttribute("aria-expanded", String(next))
        panel.hidden = !next
      })
    })
  },

  renderCompareTabs({ kicker, tabs }) {
    const firstId = tabs[0]?.id
    const btns = tabs
      .map(
        (t) => `
          <button type="button" role="tab" class="compare-tab${firstId === t.id ? " is-active" : ""}"
            data-compare-tab="${t.id}" aria-selected="${firstId === t.id}" id="tab-${t.id}">
            ${t.title}
          </button>`,
      )
      .join("")
    const panels = tabs
      .map(
        (t) => `
          <div class="compare-panel${firstId === t.id ? " is-active" : ""}" role="tabpanel"
            data-compare-panel="${t.id}" aria-labelledby="tab-${t.id}"${firstId !== t.id ? " hidden" : ""}>
            ${t.body}
          </div>`,
      )
      .join("")
    return `
      <section class="compare-tabs-wrap" aria-label="${kicker || "Comparativo"}">
        ${kicker ? `<p class="compare-tabs-kicker">${kicker}</p>` : ""}
        <div class="compare-tabs-list" role="tablist">${btns}</div>
        <div class="compare-panels">${panels}</div>
      </section>
    `
  },

  bindCompareTabs(container) {
    const root = container.querySelector(".compare-tabs-wrap")
    if (!root) return
    const tabs = [...root.querySelectorAll("[data-compare-tab]")]
    const panels = [...root.querySelectorAll("[data-compare-panel]")]
    const activate = (id) => {
      tabs.forEach((t) => {
        const active = t.getAttribute("data-compare-tab") === id
        t.classList.toggle("is-active", active)
        t.setAttribute("aria-selected", String(active))
      })
      panels.forEach((p) => {
        const active = p.getAttribute("data-compare-panel") === id
        p.classList.toggle("is-active", active)
        p.hidden = !active
      })
    }
    tabs.forEach((tab, idx) => {
      tab.addEventListener("click", () => activate(tab.getAttribute("data-compare-tab")))
      tab.addEventListener("keydown", (event) => {
        if (!["ArrowRight", "ArrowLeft", "Home", "End"].includes(event.key)) return
        event.preventDefault()
        let ni = idx
        if (event.key === "ArrowRight") ni = (idx + 1) % tabs.length
        if (event.key === "ArrowLeft") ni = (idx - 1 + tabs.length) % tabs.length
        if (event.key === "Home") ni = 0
        if (event.key === "End") ni = tabs.length - 1
        tabs[ni]?.focus()
        activate(tabs[ni].getAttribute("data-compare-tab"))
      })
    })
  },

  renderQuizCheckpoint({ question, options, correctId, feedbackOk, feedbackWrong }) {
    const opts = options
      .map(
        (o) =>
          `<button type="button" class="quiz-opt" data-quiz-opt="${o.id}">${o.label}</button>`,
      )
      .join("")
    return `
      <div class="quiz-check" data-quiz-correct="${correctId}">
        <p class="quiz-q">${question}</p>
        <div class="quiz-opts">${opts}</div>
        <p class="quiz-feedback" role="status" aria-live="polite"></p>
        <template class="quiz-msg-ok">${feedbackOk ?? "Correto."}</template>
        <template class="quiz-msg-wrong">${feedbackWrong ?? "Revise a alternativa e tente novamente."}</template>
      </div>
    `
  },

  bindQuizCheckpoint(container) {
    const box = container.querySelector(".quiz-check")
    if (!box) return
    const correct = box.getAttribute("data-quiz-correct")
    const feedback = box.querySelector(".quiz-feedback")
    const msgOk = box.querySelector(".quiz-msg-ok")?.textContent?.trim() || "Correto."
    const msgWrong = box.querySelector(".quiz-msg-wrong")?.textContent?.trim() || "Tente outra opção."
    const buttons = [...box.querySelectorAll("[data-quiz-opt]")]
    buttons.forEach((b) => {
      b.addEventListener("click", () => {
        if (box.classList.contains("quiz-done")) return
        const id = b.getAttribute("data-quiz-opt")
        const ok = id === correct
        box.classList.add("quiz-done")
        buttons.forEach((btn) => {
          btn.disabled = true
          const bid = btn.getAttribute("data-quiz-opt")
          if (bid === correct) btn.classList.add("quiz-right")
          else if (bid === id) btn.classList.add("quiz-wrong")
        })
        feedback.textContent = ok ? msgOk : msgWrong
      })
    })
  },

  /**
   * Passos lineares com checklist opcional (checkboxes obrigatórios para avançar).
   * `steps[]`: { title, html, checks?: { id, label }[] }
   */
  renderDdAWizard({ steps }) {
    const panels = steps
      .map((s, i) => {
        const checks = (s.checks || [])
          .map(
            (c) =>
              `<label class="dda-check"><input type="checkbox" data-dda-check="${c.id}" /> <span>${c.label}</span></label>`,
          )
          .join("")
        return `
          <div class="dda-step-panel${i === 0 ? " is-active" : ""}" data-dda-step-index="${i}" ${i > 0 ? "hidden" : ""}>
            <h4 class="dda-step-title">${s.title}</h4>
            <div class="dda-step-body">${s.html}</div>
            ${checks ? `<div class="dda-checks" role="group" aria-label="Conferências">${checks}</div>` : ""}
          </div>`
      })
      .join("")
    const progress = steps
      .map(
        (_, i) =>
          `<span class="dda-dot${i === 0 ? " is-active" : ""}" data-dda-dot="${i}" aria-hidden="true"></span>`,
      )
      .join("")
    return `
      <div class="dda-wizard">
        <p class="dda-warn" hidden role="alert">Marque todos os itens de conferência antes de avançar.</p>
        <div class="dda-progress" aria-hidden="true">${progress}</div>
        <div class="dda-panels">${panels}</div>
        <div class="dda-actions">
          <button type="button" class="btn-dda btn-dda-back" disabled>Voltar</button>
          <button type="button" class="btn-dda btn-dda-next">Próximo</button>
        </div>
      </div>
    `
  },

  bindDdAWizard(container) {
    const root = container.querySelector(".dda-wizard")
    if (!root) return
    const panels = [...root.querySelectorAll("[data-dda-step-index]")]
    const dots = [...root.querySelectorAll("[data-dda-dot]")]
    const warn = root.querySelector(".dda-warn")
    const btnBack = root.querySelector(".btn-dda-back")
    const btnNext = root.querySelector(".btn-dda-next")
    let step = 0
    const max = panels.length - 1

    const checksOk = (panel) => {
      const cbs = [...panel.querySelectorAll("[data-dda-check]")]
      if (!cbs.length) return true
      return cbs.every((cb) => cb.checked)
    }

    const syncUi = () => {
      panels.forEach((p, i) => {
        const active = i === step
        p.classList.toggle("is-active", active)
        p.hidden = !active
      })
      dots.forEach((d, i) => d.classList.toggle("is-active", i === step))
      btnBack.disabled = step === 0
      const done = root.classList.contains("dda-finished")
      btnNext.disabled = done
      if (done) btnNext.textContent = "Concluído"
      else btnNext.textContent = step === max ? "Concluir" : "Próximo"
    }

    btnNext.addEventListener("click", () => {
      const panel = panels[step]
      if (!checksOk(panel)) {
        if (warn) {
          warn.hidden = false
          warn.classList.add("dda-warn-flash")
          setTimeout(() => warn.classList.remove("dda-warn-flash"), 600)
        }
        return
      }
      if (warn) warn.hidden = true
      if (step < max) {
        step += 1
        syncUi()
        return
      }
      if (root.classList.contains("dda-finished")) return
      root.classList.add("dda-finished")
      if (!root.querySelector(".dda-done-msg")) {
        const fin = document.createElement("p")
        fin.className = "dda-done-msg"
        fin.setAttribute("role", "status")
        fin.textContent =
          "Rotina registrada: você percorreu logon, importação, conferência e programação — alinhado ao roteiro do DDA no SAP."
        root.querySelector(".dda-actions")?.before(fin)
      }
      syncUi()
    })

    btnBack.addEventListener("click", () => {
      if (step > 0) {
        step -= 1
        if (warn) warn.hidden = true
        syncUi()
      }
    })

    syncUi()
  },

  renderTabelaBloqueios({ rows }) {
    const body = rows
      .map(
        (r) => `
      <tr data-bloq-tipo="${r.tipo}" data-bloq-text="${`${r.letra} ${r.desc} ${r.tipoLabel}`.toLowerCase()}">
        <td><span class="bloq-badge bloq-badge-${r.tipo}">${r.tipoLabel}</span></td>
        <td><strong>${r.letra}</strong></td>
        <td>${r.desc}</td>
      </tr>`,
      )
      .join("")
    return `
      <div class="bloq-wrap">
        <div class="bloq-toolbar">
          <label class="bloq-search-label">
            <span class="bloq-search-hint">Filtrar</span>
            <input type="search" class="bloq-search" placeholder="Letra, descrição ou automático/manual…" autocomplete="off" />
          </label>
          <div class="bloq-chips" role="group" aria-label="Tipo de bloqueio">
            <button type="button" class="bloq-chip is-active" data-bloq-filter="all">Todos</button>
            <button type="button" class="bloq-chip" data-bloq-filter="auto">Automáticos</button>
            <button type="button" class="bloq-chip" data-bloq-filter="manual">Manuais</button>
          </div>
        </div>
        <div class="bloq-table-scroll">
          <table class="bloq-table">
            <thead><tr><th>Tipo</th><th>Código</th><th>Descrição</th></tr></thead>
            <tbody>${body}</tbody>
          </table>
        </div>
        <p class="bloq-empty" hidden>Nenhum bloqueio encontrado com esse filtro.</p>
      </div>
    `
  },

  bindTabelaBloqueios(container) {
    const wrap = container.querySelector(".bloq-wrap")
    if (!wrap) return
    const input = wrap.querySelector(".bloq-search")
    const chips = [...wrap.querySelectorAll("[data-bloq-filter]")]
    const rows = [...wrap.querySelectorAll(".bloq-table tbody tr")]
    const empty = wrap.querySelector(".bloq-empty")
    let tipo = "all"

    const apply = () => {
      const q = (input?.value || "").trim().toLowerCase()
      let visible = 0
      rows.forEach((tr) => {
        const t = tr.getAttribute("data-bloq-tipo")
        const text = tr.getAttribute("data-bloq-text") || ""
        const okTipo = tipo === "all" || t === tipo
        const okText = !q || text.includes(q)
        const show = okTipo && okText
        tr.hidden = !show
        if (show) visible += 1
      })
      if (empty) empty.hidden = visible > 0
    }

    input?.addEventListener("input", apply)
    chips.forEach((chip) => {
      chip.addEventListener("click", () => {
        chips.forEach((c) => c.classList.toggle("is-active", c === chip))
        tipo = chip.getAttribute("data-bloq-filter") || "all"
        apply()
      })
    })
    apply()
  },

  bindHotspotPainel({ container, dataAttr, points }) {
    const selector = `[${dataAttr}]`
    const buttons = [...container.querySelectorAll(selector)]
    const detail = container.querySelector(".hotspot-detail")
    if (!buttons.length || !detail) return
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const nextId = button.getAttribute(dataAttr)
        const point = points.find((p) => p.id === nextId)
        buttons.forEach((b) => b.classList.toggle("is-active", b === button))
        if (!point) return
        detail.querySelector("h5").textContent = point.title
        detail.querySelector("p").textContent = point.text
      })
    })
  },
}

window.CursoInterativos = CursoInterativos
