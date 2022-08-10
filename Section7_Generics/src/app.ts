//94 lesson
// const names: Array<string> = [];
//
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('this is done')
//   }, 2000);
// });
//
// promise.then(data => {
//   ...
// })


//95 lesson
// function merge<T, U>(objA: T, objB: U): T & U {
//   return Object.assign(objA, objB);
// }
//
// const mergedObj = merge({name: 'Max', hobbies: ['Sport']}, {age: 20});
// console.log(mergedObj);


//96 lesson
function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}
const mergedObj = merge({name: 'Max', hobbies: ['Sport']}, {age: 20});
console.log(mergedObj);

//97 lesson
interface Lengthy {
  length: number;
}

function countAndPrint<T extends Lengthy>(element: T) {
  let descr = 'Got no value';
  if(element.length === 1) {
    descr = 'Got 1 element';
  } else if(element.length > 1) {
    descr = 'Got' + element.length + ' elements';
  }
  return [element, descr];
}

console.log(countAndPrint('Hi there'));

//98 lesson
function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
  return 'value: ' + obj[key];
}

extractAndConvert({name: 'Max'}, 'name');

//99 lesson
class DataStorage<T> {
    private data: T[] = [];

    addItem(item: T) {
      this.data.push(item);
    }
    removeitem(item: T) {
      this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
      return [...this.data];
    }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Max');
textStorage.addItem('Alice');
textStorage.removeitem('Max');
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();
numberStorage.addItem(1);
numberStorage.addItem(2);
numberStorage.removeitem(1);
console.log(numberStorage.getItems());

//100 lesson
interface CourseGoal {
  title: string;
  description: string;
  completeUnit: Date;
}

function createCourseGoal(
    title :string,
    description: string,
    date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUnit = date;

  return courseGoal as CourseGoal;
}

const names: Readonly<string[]> = ['Max', 'Steve'];

