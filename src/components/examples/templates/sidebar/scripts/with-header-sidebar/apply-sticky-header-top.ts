// Applies top style property to the navigation element(s) depending on the header height

const $sidebarHeader = document.querySelector<HTMLElement>("#sidebar-with-header header")
const $sidebarContainer = document.querySelector<HTMLElement>(
	"#sidebar-with-header [data-sidebar-container]"
)

if ($sidebarHeader && $sidebarContainer) {
	$sidebarContainer.setAttribute("style", `top: ${$sidebarHeader.offsetHeight}px;`)
}
