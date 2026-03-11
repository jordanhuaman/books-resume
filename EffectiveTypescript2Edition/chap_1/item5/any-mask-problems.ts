/**
 * We change the item to number, but the handleSelectItem bug still persisted
 */
interface ComponentProps {
  onSelectItem: (item: number) => void;
}

function renderSelector(props: ComponentProps) { /* ... */ }

let selectedId: number = 0;

function handleSelectItem(item: any) {
  selectedId = item.id;
}
renderSelector({ onSelectItem: handleSelectItem });
