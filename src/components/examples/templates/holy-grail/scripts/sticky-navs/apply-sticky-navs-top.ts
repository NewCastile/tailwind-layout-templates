const $stickyNavsHolyGrailHeader = document.querySelector<HTMLElement>(
	"[data-sticky-navs-holy-grail] header"
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
	$stickyNavsHolyGrailHeader
) {
	$stickyNavsHolyGrailAsideNav.setAttribute(
		"style",
		`top: ${$stickyNavsHolyGrailHeader.offsetHeight}px`
	)
	$stickyNavsHolyGrailNavContainer.setAttribute(
		"style",
		`top: ${$stickyNavsHolyGrailHeader.offsetHeight}px`
	)
}
