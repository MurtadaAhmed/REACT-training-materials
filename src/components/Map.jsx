export default function Map() {
    let numbers = [1, 2, 3, 4, 5];
    let doubled = numbers.map((number) => number * 2);

    return (
        <>
            <h2>Map Example</h2>
            <ol>
                {doubled.map((number, index) => {
                    return (
                        <li key={index}>
                            Index: {index} - Value: {number}
                        </li>
                    );
                })}
            </ol>
        </>
    );
}
