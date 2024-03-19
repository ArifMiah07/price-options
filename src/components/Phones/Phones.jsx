import axios from "axios";
import { useEffect, useState } from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianAxis, Tooltip } from "recharts";
import ClipLoader from "react-spinners/ClipLoader";
import { BarLoader } from "react-spinners";

const Phones = () => {
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#ffffff");
    const [phones, setPhones] = useState([]);

    useEffect(() => {
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data => {
            const phoneData = data.data.data;
            const phonesWithFakeData = phoneData.map((phone) => {
                const obj = {
                    name: phone.phone_name,
                    price: parseInt(phone.slug.split('-')[1])
                }
                return obj;
            })
            console.log(phonesWithFakeData);
            setPhones(phonesWithFakeData);
            setLoading(false);
        })
    }, [])

    const override = {
        display: "block",
        margin: "0 auto",
        borderColor: "red",
    };

    return (
        <div>
            <div className="sweet-loading">
                <button onClick={() => setLoading(!loading)}>Toggle Loader</button>
                <input value={color} onChange={(input) => setColor(input.target.value)} placeholder="Color of the loader" />
                {loading && <div>
                    <ClipLoader
                    color={color}
                    loading={loading}
                    cssOverride={override}
                    size={150}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
                <button onClick={() => setLoading(!loading)} className="btn">Toggle Loader</button>
                <input value={color} onChange={(input) => setColor(input.target.value)} placeholder="Color of the loader" />
                <BarLoader
                    color={color}
                    loading={loading}
                    cssOverride={override}
                    size={150}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                ></BarLoader>
                </div> }
            </div>
            <h2 className="text-5xl">Phones: {phones.length}</h2>
            <BarChart width={1230} height={250} data={phones} margin={{ top: 20, right: 20, bottom: 20, left: 20 }} >
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <CartesianAxis></CartesianAxis>
                <Cell />
                <Bar dataKey="price" fill="#8884d8" />
            </BarChart>
        </div>
    );
};

export default Phones;
