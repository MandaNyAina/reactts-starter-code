import { toast, ToastOptions, ToastPosition } from 'react-toastify';
import { IToastService } from './IToast.service';

export class ToastService implements IToastService {
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
