import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ValidationService {
  constructor() {}
  containMayus(text: string | null | undefined): boolean {
    if (text && /[A-Z]/.test(text)) {
      return true;
    } else {
      return false;
    }
  }
  containMinus(text: string | null | undefined): boolean {
    if (text && /[a-z]/.test(text)) {
      return true;
    } else {
      return false;
    }
  }
  containNumber(text: string | null | undefined): boolean {
    if (text && /\d/.test(text)) {
      return true;
    } else {
      return false;
    }
  }

  lengthMinValidator(text: string | null | undefined) {
    if (text && text.length >= 8) {
      return true;
    } else {
      return false;
    }
  }
  lengthMaxValidator(text: string | null | undefined) {
    if (text && text.length <= 15) {
      return true;
    } else {
      return false;
    }
  }
  noContainSpace(text: string | null | undefined) {
    if (text && /^[^\s]+$/.test(text)) {
      return true;
    } else {
      return false;
    }
  }
  containSpecialCharacter(text: string | null | undefined) {
    if (text && /^(?=.*[!@#$%^&*()_+\-=\[\]{}|;':",./<>?]).+$/.test(text)) {
      return true;
    } else {
      return false;
    }
  }
  getColorValidation(
    text: string | null | undefined,
    fun: (value: string | null | undefined) => boolean
  ): string {
    if (!text) {
      return 'label label-medium';
    } else if (fun(text)) {
      return 'label label-success';
    } else {
      return 'label label-error';
    }
  }
}
