import { toast, ToastOptions, ToastPosition } from 'react-toastify';
import { I_ToastService } from './I.toast.service';

export class ToastService implements I_ToastService {
    private position: ToastPosition = 'top-right';
    private autoClose = 5000;

    private getConfiguration(): ToastOptions {
        return {
            position: this.position,
            autoClose: this.autoClose,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        };
    }

    public showSuccess(message: string) {
        toast.success(message, this.getConfiguration());
    }

    public showError(message: string) {
        toast.error(message, this.getConfiguration());
    }

    public showWarning(message: string) {
        toast.warn(message, this.getConfiguration());
    }
}
