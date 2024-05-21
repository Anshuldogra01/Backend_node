const Book=require('../Model/Book');

// TO create a book 
exports.createBook= async(req,res)=>{
    try{
    const book=new Book(req.body);
    const savedBook=await book.save();
    res.status(201).json(savedBook);
}
    catch(error){
        res.status(500).json({error:error.message});
    }
}
// to get all books 
exports.getAllBooks= async(req,res)=>{
    try{
        const book=Book.find();
        res.status(201).json(book);
    }
    catch(error){
        res.status(500).json({error:error.message});
    }
}
//to get specific detail of a book 
exports.getBookById=async(req,res)=>{
    try{
    const book=await Book.findById(req.params.id);
    if(!book){
        res.status(401).json({error:'Book Not found'})
    }
    res.status(200).json(book);}
    catch(error){
        res.status(500).json({error:error.message});
    }
}
// to update a book by taking its id 
exports.updateBook = async (req, res) => {
    try {
        const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!book) {
            return res.status(404).json({ error: 'Book Not found' }); // Use 404 for not found
        }
        res.status(200).json(book); // Use 200 for successful update
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
