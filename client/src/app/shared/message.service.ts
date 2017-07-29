import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { MdSnackBar } from '@angular/material';

@Injectable()
export class MessageService {
    private successMessage: string
    private errorMessage: string

    constructor(
        public snackBar: MdSnackBar
    ) {
    }

    getSuccessMessage() {
        return this.successMessage;
    }

    setSuccessMessage(message) {
        this.successMessage = message;
    }

    getErrorMessage() {
        return this.errorMessage;
    }

    setErrorMessage(message) {
        this.errorMessage = message;
    }

    showErrorMessage(duration = 3000) {
        this.snackBar.open(this.errorMessage, 'X', {
            duration: duration,
        });
    }

    showSuccessMessage(duration = 3000) {
        this.snackBar.open(this.successMessage, 'X', {
            duration: duration,
        });

    }

}