
const Contact = () => {
    return (
        <div className="max-w-screen-xl mx-auto flex justify-around items-center">
           <div className="flex-1">
             <img src="https://img.freepik.com/free-vector/contact-center-abstract-concept_335657-3032.jpg?w=2000" alt="" />
           </div>
           <div className="flex-1">
              <h3 className="text-2xl font-semibold">Name :- Samio Hasan</h3>
              <p className="text-xl">Email :- samiohasan6@gmail.com</p>
              <p className="text-xl">Phone :- +8801709801305</p>
              <p className="text-xl">Facebook :- <a href="https://www.facebook.com/samio.hasan.37" className="text-red-700">Click(Samio)</a></p>
           </div>
        </div>
    );
};

export default Contact;