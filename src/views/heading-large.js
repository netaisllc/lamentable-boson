module.exports = function LargeHeading( props ) {
	props = props || {}
	let children = props.children || ''
	return `
<h1
  class="
    margin-bottom-24
    font-size-42
    font-weight-300
    color-white
  "
>
  ${ children }
</h1>
  `
}
