const openForm = () => {
  const formPwd = document.querySelector(".login-form");
  const signIn = formPwd.querySelector(".in");
  const inputs = formPwd.querySelector(".inputs");

  signIn.addEventListener("click", () => {
    inputs.classList.toggle("unhide");
  });
};

class Inputer {
  inputValue;
  outputClass;
  textOutputNull;
  textOutputTrue;

  constructor(inputValue, outputClass, textOutputNull, textOutputTrue) {
    this.inputValue = document.querySelector(inputValue);
    this.outputClass = document.querySelector(outputClass);
    this.textOutputNull = textOutputNull;
    this.textOutputTrue = textOutputTrue;
  }

  control() {
    this.outputClass.textContent = this.textOutputNull;
    this.outputClass.style.color = "red";
    this.inputValue.addEventListener("input", () => {
      if (this.inputValue.value) {
        this.outputClass.textContent = this.textOutputTrue;
        this.outputClass.style.color = "green";
      } else {
        this.outputClass.textContent = this.textOutputNull;
        this.outputClass.style.color = "red";
      }
    });
  }
}

class PwdInputer extends Inputer {
  constructor(
    inputValue,
    outputClass,
    textOutputNull,
    textOutputTrue,
    textOutputFalse,
    inputValue2
  ) {
    super(
      inputValue,
      outputClass,
      textOutputNull,
      textOutputTrue,
      textOutputFalse
    );
    this.textOutputFalse = textOutputFalse;
    this.inputValue2 = document.querySelector(inputValue2);
  }

  controlPwd() {
    this.outputClass.textContent = this.textOutputNull;
    this.outputClass.style.color = "red";
    this.inputValue.addEventListener("input", () => {
      if (this.inputValue.value) {
        this.outputClass.textContent = this.textOutputFalse;
        this.outputClass.style.color = "orange";
        if (this.inputValue.value == this.inputValue2.value) {
          this.outputClass.textContent = this.textOutputTrue;
          this.outputClass.style.color = "green";
        }
      } else {
        this.outputClass.textContent = this.textOutputNull;
        this.outputClass.style.color = "red";
      }
    });
  }
}

const loginControl = new Inputer(
  ".login",
  ".alert1",
  "Type your login",
  "Login matches"
);

const passwordControl = new PwdInputer(
  ".password1",
  ".alert2",
  "Type your password",
  "Password matches",
  "The password is not the same ",
  ".password2"
);

const passwordRepeatControl = new PwdInputer(
  ".password2",
  ".alert2",
  "Type your password",
  "Password matches",
  "The password is not the same ",
  ".password1"
);

openForm();

loginControl.control();
passwordControl.controlPwd();
passwordRepeatControl.controlPwd();
