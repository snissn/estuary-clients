note
 description:"[
		Estuary API
 		This is the API for the Estuary application.
  		OpenAPI spec version: 0.0.0
 	    

  	NOTE: This class is auto generated by the swagger code generator program.

 		 Do not edit the class manually.
 	]"
	date: "$Date$"
	revision: "$Revision$"
	EIS:"Eiffel swagger codegen", "src=https://github.com/swagger-api/swagger-codegen.git", "protocol=uri"
class MAIN_ESTIMATE_DEAL_BODY 

inherit

  ANY
      redefine
          out 
      end


feature --Access

    duration_blks: INTEGER_32 
      
    replication: INTEGER_32 
      
    size: INTEGER_32 
      
    verified: BOOLEAN 
      

feature -- Change Element  
 
    set_duration_blks (a_name: like duration_blks)
        -- Set 'duration_blks' with 'a_name'.
      do
        duration_blks := a_name
      ensure
        duration_blks_set: duration_blks = a_name		
      end

    set_replication (a_name: like replication)
        -- Set 'replication' with 'a_name'.
      do
        replication := a_name
      ensure
        replication_set: replication = a_name		
      end

    set_size (a_name: like size)
        -- Set 'size' with 'a_name'.
      do
        size := a_name
      ensure
        size_set: size = a_name		
      end

    set_verified (a_name: like verified)
        -- Set 'verified' with 'a_name'.
      do
        verified := a_name
      ensure
        verified_set: verified = a_name		
      end


 feature -- Status Report

    out: STRING
          -- <Precursor>
      do
        create Result.make_empty
        Result.append("%Nclass MAIN_ESTIMATE_DEAL_BODY%N")
        if attached duration_blks as l_duration_blks then
          Result.append ("%Nduration_blks:")
          Result.append (l_duration_blks.out)
          Result.append ("%N")    
        end  
        if attached replication as l_replication then
          Result.append ("%Nreplication:")
          Result.append (l_replication.out)
          Result.append ("%N")    
        end  
        if attached size as l_size then
          Result.append ("%Nsize:")
          Result.append (l_size.out)
          Result.append ("%N")    
        end  
        if attached verified as l_verified then
          Result.append ("%Nverified:")
          Result.append (l_verified.out)
          Result.append ("%N")    
        end  
      end
end

