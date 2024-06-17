const $stickyNavsHolyGrailHeading = document.querySelector<HTMLElement>(
	"[data-sticky-navs-holy-grail] header h2"
)
const $stickyNavsHolyGrailNavContainer = document.querySelector<HTMLElement>(
	"[data-sticky-navs-holy-grail] #main-navigation-container"
)
const $stickyNavsHolyGrailAsideNav = document.querySelector<HTMLElement>(
	"[data-sticky-navs-holy-grail] aside nav"
)

if (
	$stickyNavsHolyGrailNavContainer &&
	$stickyNavsHolyGrailAsideNav &&
	$stickyNavsHolyGrailHeading
) {
	$stickyNavsHolyGrailAsideNav.setAttribute(
		"style",
		`top: ${$stickyNavsHolyGrailHeading.offsetHeight}px`
	)
	$stickyNavsHolyGrailNavContainer.setAttribute("style", `top: 0px`)
}
