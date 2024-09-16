import s from './Display.module.scss';

export const Display = () => {

    return (
        <>
            <section className={s.displaygrid}>
                <div className={s.displayStyle}>1234567</div>
                <button>Reset</button>
            </section>
        </>
    )
}