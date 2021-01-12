import React from 'react';

 const useSnackbar = () =>  {
    const [isActive, setIsActive] = React.useState(false);
    
    React.useEffect(() => {
        if (isActive === true) {
            setTimeout(() => {
                setIsActive(false);
            }, 3000);
        }
    }, [isActive]);

    const openSnackBar = (msg = 'Something went wrong...') => {
        setIsActive(true);
    }

    return { isActive, openSnackBar }
}
export default useSnackbar