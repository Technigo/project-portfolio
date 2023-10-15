const Container = ({ className, children }) => {
    return (
        <div className={className}>
            <div className="max-w-default mx-auto px-8 py-40">
                {children}
            </div>
        </div>
    );
}

export default Container;
