import { Notify } from 'notiflix/build/notiflix-notify-aio';

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

const form = document.querySelector('.form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(evt) {
  evt.preventDefault();
  const { delay, step, amount } = form.elements;
  const numDelay = Number(delay.value);
  const numStep = Number(step.value);
  const numAmount = Number(amount.value);

  let prevDelay = numDelay;

  for (let i = 1; i <= numAmount; i += 1) {
    createPromise(i, prevDelay)
      .then(({ position, delay }) =>
        Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        )
      )
      .catch(({ position, delay }) =>
        Notify.failure(
          `❌ Rejected  promise ${position} in ${delay}ms`
        )
      );
    prevDelay += numStep;
  }
}