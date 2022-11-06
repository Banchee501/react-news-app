import Container from 'react-bootstrap/Container';

import './statistics.scss';

const Statistics = () => {
    const day = 0;
    const soldier = 0;
    const tanks = 0;
    const artilery = 0;
    const aircraft = 0;
    const mlrs = 0;
    const helicopter = 0;
    const afv = 0;

    return (
        <Container>
            <div className='statistics'>
                <div>{day} день війни:</div>
                <ul>
                    <li>особовий склад ~{soldier}</li>
                    <li>танки {tanks}</li>
                    <li>артсистеми {artilery}</li>
                    <li>літаки {aircraft}</li>
                    <li>РСЗВ {mlrs}</li>
                    <li>гелікоптери {helicopter}</li>
                    <li>ББМ {afv}</li>
                </ul>
            </div>
        </Container>
    )
}

export default Statistics;