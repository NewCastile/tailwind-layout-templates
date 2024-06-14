const $sidebarHeader = document.querySelector<HTMLElement>("#sidebar-with-header header")
const $sidebarContainer = document.querySelector<HTMLElement>(
	"#sidebar-with-header [data-sidebar-container]"
)

if ($sidebarHeader && $sidebarContainer) {
	const headerHeight = `${$sidebarHeader.offsetHeight}px`
	$sidebarContainer.setAttribute("style", `top: ${headerHeight};`)
}
