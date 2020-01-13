
export interface Item {
    id: Number;
    title: String;
    name: String;
    status: 'active'|'clear'|'waiting';
}

export interface State {
    itemList: Item[];
}
