export default function GlobalState(props: GlobalStateProps) {

	// this is intended to be wrapped in context providers
	// - App is wrapped in this
	return (
		<>
			{ props.children }
		</>
	);
}

type GlobalStateProps = {
	children?: React.ReactNode
};