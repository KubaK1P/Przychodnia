"use client";

export default function Footer() {
    return (
        <footer className="basis-[100%] h-[20%] bg-slate-50 flex justify-evenly p-4">
            <section className="basis-[45%] p-4 shadow-md rounded-md bg-slate-100">
                <h3 className="text-2xl font-bold tracking-wide">Linki</h3>
                <ul className="p-2 m-2 ">
                    <li>Jakiś linki</li>
                    <li>Jakiś linki</li>
                    <li>Jakiś linki</li>
                </ul>
            </section>
            <section className="basis-[45%] p-4 shadow-md rounded-md bg-slate-100">
                <h3 className="text-2xl font-bold tracking-wide">Kontakt</h3>
                <ul className="p-2 m-2 ">
                    <li>Moje dane osobowe</li>
                    <li>Moje dane osobowe</li>
                    <li>Moje dane osobowe</li>
                </ul>
            </section>
        </footer>
    );
}