 exports.generateCrudMethods=Model=>{
    return{
            getAll:()=>Model.find(),
            getById:Id=>Model.findById(Id),
            create: record=>Model.create(record),
            update:(id,record)=>Model.findByIdAndUpdate(id,record,{new:true}),
            delete:id=>Model.findByIdAndDelete(id)

    }
}