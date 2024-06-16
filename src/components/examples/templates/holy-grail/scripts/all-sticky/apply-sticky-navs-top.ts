const $allStickyHolyGrailHeader = document.querySelector<HTMLElement>(
	"[data-all-sticky-holy-grail] header"
)
const $allStickyHolyGrailNavContainer = document.querySelector<HTMLElement>(
	"[data-all-sticky-holy-grail] #main-navigation-container"
)
const $allStickyHolyGrailAside = document.querySelector<HTMLElement>(
	"[data-all-sticky-holy-grail] aside nav"
)

if ($allStickyHolyGrailNavContainer && $allStickyHolyGrailAside && $allStickyHolyGrailHeader) {
	$allStickyHolyGrailAside.setAttribute("style", `top: ${$allStickyHolyGrailHeader.offsetHeight}px`)
	$allStickyHolyGrailNavContainer.setAttribute(
		"style",
		`top: ${$allStickyHolyGrailHeader.offsetHeight}px`
	)
}
