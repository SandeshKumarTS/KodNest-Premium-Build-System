const KEY = "placement_history"

export function saveAnalysis(entry) {

  try {

    const history =
      JSON.parse(localStorage.getItem(KEY)) || []

    history.unshift(entry)

    localStorage.setItem(KEY, JSON.stringify(history))

  } catch (err) {

    console.error("History save failed", err)

  }
}

export function getHistory() {

  try {

    return JSON.parse(localStorage.getItem(KEY)) || []

  } catch {

    return []

  }

}