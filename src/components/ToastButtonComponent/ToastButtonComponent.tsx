import React from 'react';
import { ToastService } from '../../services/Toast/Toast.service';
import { Button } from 'primereact/button';

const toast = new ToastService();

export const ToastButtonComponent = (): React.ReactElement => {
    const testToast = () => {
        toast.showSuccess('It works !');
    };

    return (
        <Button
            className="p-button-success mt-4"
            onClick={testToast}
            label="Toast test !"
        />
    );
};
