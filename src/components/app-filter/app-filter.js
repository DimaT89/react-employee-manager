import './app-filter.css'

const AppFilter = ({filter, onFilterSelect}) => {
    const buttonsData = [
        {name: 'all', label: 'Все сотрудники'},
        {name: 'rise', label: 'На повышение'},
        {name: 'moreThen100', label: 'З/П больше 1000$'}
    ]

    const buttons = buttonsData.map(({name, label}) => {
        const active = filter === name
        const claSS = active ? 'btn-light' : 'btn-outline-light'

        return (
            <button
                className={`btn ${claSS}`}
                type={'button'}
                key={name}
                onClick={() => onFilterSelect(name)}
            >
                {label}
            </button>
        )
    })

    return (
        <div className="btn-group">
            {buttons}
        </div>
    )
}

export default AppFilter